class summaryViewCtrl {
    constructor($scope) {
        this.$scope = $scope;
        this.$scope.model = {
            data: 1234
        };
    }
}

const summaryViewDirective = {
    scope: {},
    restrict: "E",
    templateUrl: "./js/app/summary-view/summary-view.tpl.html",
    controller: ["$scope", classWrapper(summaryViewCtrl)],
};
