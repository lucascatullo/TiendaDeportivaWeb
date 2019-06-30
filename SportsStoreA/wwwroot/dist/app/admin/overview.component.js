import * as tslib_1 from "tslib";
import { Repository } from '../models/repository';
import { Component } from '@angular/core';
let OverviewComponent = class OverviewComponent {
    constructor(repo) {
        this.repo = repo;
    }
    get productos() {
        return this.repo.productos;
    }
    get ordenes() {
        return this.repo.ordenes;
    }
};
OverviewComponent = tslib_1.__decorate([
    Component({
        templateUrl: "overview.component.html"
    }),
    tslib_1.__metadata("design:paramtypes", [Repository])
], OverviewComponent);
export { OverviewComponent };
//# sourceMappingURL=overview.component.js.map