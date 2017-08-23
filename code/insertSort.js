/**
 * Created by Administrator on 2017/8/13 0013.
 */
function insertSort(arr) {
    for (var i=1; i<arr.length;i++) {
        for (var j=i; j>0; j--) {
            if (arr[j] < arr[j-1]) {
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            }
        }
    }
}

function selectSort(arr) {
    var minIndex;
    for (var i=0; i<arr.length-1;i++) {
        var min = arr[i];
        for (var j = i; j<arr.length;j++) {
            if (min > arr[j]) {
                min = arr[j];
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
}