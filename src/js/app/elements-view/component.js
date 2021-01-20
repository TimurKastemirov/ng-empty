class elementsViewCtrl {
    model = {
        width: 300,
    };

    constructor($scope, $element) {
        this.$scope = $scope;
        this.$element = $element;

        this.setWidth();
    }

    setWidth () {
        let width = this.model.width;
        if (!width) {
            width = 1;
            this.model.width = width;
        }
        this.$element.css("width", `${width}px`);
    };
}

const elementsViewDirective = {
    scope: {},
    restrict: "E",
    templateUrl: "./js/app/elements-view/elements-view.tpl.html",
    controller: ["$scope", "$element", classWrapper(elementsViewCtrl)],
};
