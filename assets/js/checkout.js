// Angular js
app.controller("checkOut", function ($scope, $window) {
    // Get current Time
    $scope.currentTime = new Date();

    // Create random OrderID
    $scope.getRandomInt = function (max) {
        return Math.floor(Math.random() * max);
    }
    document.getElementById("OrderID").innerText = "DH" + $scope.getRandomInt(1000000000);

    $scope.PaySuccess = true;
    $scope.PayFail = false;
    $scope.pay = function (index) {
        if (index.FormCheckOut.$valid) {
            // Show notification add success
            $scope.showNotification(true, false);
        } else {
            $scope.showNotification(false, true);
        }
    }

    $scope.showNotification = function (PaySuccess, PayFail) {
        $scope.PaySuccess = PaySuccess;
        $scope.PayFail = PayFail;
        const toastLiveExample = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
    }
});