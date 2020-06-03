import {IProducts} from './interfaces';
import {type} from './types';

abstract class Products implements IProducts {
    constructor(
        public sku: number,
        public name: string,
        public price: number,
        public type: type,

    ) {}

    set name(newName: string): string {
        this.name = newName;
    }

}


class Product extends Products {
}
