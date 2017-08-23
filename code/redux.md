redux有9大模块：
(function webpackUniversalModuleDefinition(root, factory) {
    //判断amd或者cmd
    root = this;
    
})(this, function() {
    return (function(modules) {
        function __webpack_require__(moduleId)) //moduleId各个模块名字
    
    })([func() {}, func() {}, ...]) //各个模块

})

1号函数：
function compose() {
    for (var _len = arguments.length, funcs = Array(_len), _key=0; _key<_len; _key++) {
        funcs[_key] = arguments[_key];  //每个函数都有对应的参数
    }
    funcs = [...args1, ...args2, ...args3, ...] 这里的..arg是函数
    
    return function() {
        if (funcs.length === 0) {
            return arguments.length <=0 ? undefined : arguments[0]
        }
        
        var last = funcs[funcs.length - 1]; //最后一个
        var rest = funcs.slice(0, -1) //除开最后一个剩余的那一个
        
        return rest.reduceRight(function(composed, f) {
            return f(composed)
        }, last.apply(undefined, arguments));  
    }
//last(arguments)
//rest.reduceRight函数是一个从最后一位开始往前迭代的，composed = last.apply(undefined, arguments)
//最后形成composed(c(b(a(arg)))) 这样的从后向前的迭代
//compose(f,g,h) => f(g(h(arg)))
}

5号函数：
*******var compose = __webpack_require__(1) 引入1号函数
//applymiddleware(thunk, promise, logger)
function applymiddleware() {
    for (var _len = arguments.length, middlewares = Array(_len), _key=0; _key<_len; _key++) {
        middlewares[_key] = arguments[_key];  //middlewares是数组，每一项为中间件
    }
```    
    return function(createStore) {
        return function (reducer, initialState, enhancer) {
            var store = createStore(reducer, initialState, enhancer)
            var _dispatch = store.dispatch;
            var chain = [];
            
            var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch(action) {
                    return _dispatch(action)
                }
            };
            
            chain = middlewares.map(function (middleware) {
                return middleware(middlewareAPI);
            });
            
            _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch)
            
            return _extends({}, store, {dispatch: _dispatch})
           
        }
    }
```
}
//_extends 相当于Object.assign实现深度拷贝功能
//_dispatch = compose(...chain)(store.dispatch)
//解读：compose(thunk, promise, logger) => thunk(promise(logger(store.dispatch)))) --- (*)
// _dispatch = (*) 的返回值
//最后重写了store的dispatch方法

4号函数：
isPlainObject函数，判断一个obj是不由Object构造函数直接构造出来的，或者__proto__是不是null


2号函数：
function createStore(reducer, initialState, enhancer) {
    if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
        enhancer = initialState;
        initialState = undefined;
    }
    
    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
            throw new Error() //enhancer必须是函数
        }
        
         return enhancer(createStore)(reducer, initialState)
    }
    
    if (typeof reducer !== 'function') {
        throw new Error('')
    }  //reducer页必须是函数
    
   var current_reducer = reducer;
   var current_state = initialState;
   var current_listener = [];
   var next_listener = current_listener;
   var is_dispatching = false;  //dispatch状态标记
   
   //复制一份current_listenr给next_listener，保证修改后者不会影响前者
   function ensure_mutate_next_listener() {
        if (next_listeners == current_listener) {
            next_listeners = current_listenr.slice() //拷贝一份
        }
   }
   
   //获取store里当前的state tree
   function getState() {
        return current_state;
   }
   
   // 参数：listener，要监听的函数
   // 返回值：function，一个可以移除监听的函数
   function subscribe(listener) {
        if (typeof listener !== 'function') {
            throw new Error()
        }
        
        var is_subscribled = true;  //标记有订阅的listener
        
        ensure_mutate_next_listener();
        
        //添加一个订阅函数
        next_listener.push(listener);
        
        //返回一个取消订阅的函数
        return function unsubscrible() {
            if (!is_subscrible) {
                return 
            }
            
            is_subscrible = false; //当前没有订阅了
            ensure_mutate_next_listener(); //保存一下
            
            //找到当前的listener
            var index = next_listener.indexOf(listenr)
            
            //移除当前的listener
            next_listeners.splice(index, 1)
        }
   }
   
   function dispatch(action) {
        if (!isPlainObject(action)) {
            throw new Error('action 必须是一个普通对象')
        }
        
        if (typeof action.type == 'undefined') {
            throw new Error('action.type 不能为undefined')
        }
   
        if (is_dispatching) {
            throw new Error('reducer在处理时不可以dispatch')
        }
        
        try {
            is_dispatching = true;
            current_state = current_reducer(current_state, action); //reudcer正在处理过程中,处理完成后返回新state
        } finally {
            is_dispatching = false;
        }
   
        var listeners = current_listenr = next_listenr;
        
        for (var i=0; i<listenrs.length; i++) {
            listeners[i]();  //执行每一个监听函数
        }
        
        return action;
   }
   
   function replaceReducer(nextReducer) {
        //nextReducer必须是一个函数
        
        current_reducer = nextReducer;
        dispatch({type: ActionTypes.INIT}) //调用默认行为
   }
   
   return {
      dispatch: dispatch,
      subscrible: subscribe,
      getState: getState,
      replaceReducer: replaceReducer
   }
}

//subscrible向next_listener里面添加listener监听函数，dispatch执行next_listener里面所有的监听函数

6号函数：
function bindActionCreator(actionCreator, dispatch) {
    return function() {
        return dispatch(actionCreator.apply(undefined, arguments));
    }
}

function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === 'function') {
        return bindActionCreator(actionCreators, dispatch)
    }
    //actionCreators为函数
    
    if (typeof actionCreators !== 'object' || actionCreators === null) {
        //抛出错误
    }
    
    var keys = Object.keys(actionCreators);
    var boundActionCreators = {};
    for (var i=0; i<keys.length; i++) {
        var keys = keys[i];
        var action_creator = actionCreators[keys];
        if (typeof action_creator === 'function') {
            boundActionCreators[key] = bindActionCreator(action_creator, dispatch)
            //只要是函数的项就封装一层bindActionCreator
        }
    }
    
    return boundActionCreators; 
}

7号函数：
function combineReducers(reducers) {
    var reducer_keys = Object.keys(reducers);
    var finalReducers = {};
    
    for (var i=0; i<reducer_keys.length; i++) {
        var key = reducer_keys[i];
        if (typeof reducers[key] === 'function') {
            final_reducers[key] = reducers[key];
        }
    }
    
    var final_reducer_keys = Object.keys(final_reducers);
    
    var sanity_error;
    try{
       
    } catch(e) {
    
    }
    
    return function combination() {
        var state = arguments.length <= 0 || arguments[0] === 'undefined' ? {} : arguments[0];
        var action = arguments[1];
        
        告警部分，省略...
        
        var has_changed = false;
        var next_state = {};
        
        for (var i=0; i<final_reducer_keys.length; i++) {
            var key = final_reducer_keys[i];
            var reducer = final_reducer[key];
            var previous_state_for_key = state[key];  //原来的state
            var next_state_for_key = reducer(previous_state_for_key, action);
            
            if (typeof next_state_for_key === 'undefined') {
                //报错
            }
            
            next_state[key] = next_state_for_key;
            has_changed = has_changed || next_state_for_key !== previous_state_for_key;        
            
            }
    return has_changed ? next_state : state;
}