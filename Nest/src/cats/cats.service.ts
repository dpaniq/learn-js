import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'
import { Cats } from './interfaces/cats.interface'


@Injectable()
export class CatsService {
    constructor(@InjectModel('Cats') private readonly catsModel:Model<Cats>) {

    }

    async ComebackCats(): Promise<Cats[]> {
            return await this.catsModel.find()
    }

    async ComeOnlyOneCatAHAHA(id: string): Promise<Cats> {
        return await this.catsModel.findOne({_id: id})
    }
    // private readonly cats: Cats[] = [ 
    //     {
    //         id: '23213131231',
    //         age: 29,
    //         birth: new Date('2019-02-03')
    //     },
    //     {
    //         id: 'asdas123131',
    //         age: 111,
    //         birth: new Date('2014-02-03')
    //     },
    //     {
    //         id: '232adasd1312131231',
    //         age: 12,
    //         birth: new Date('2012-02-03')
    //     },
    // ]

    // ComebackCats(): Cats[] {
    //     return this.cats
    // }

    // ComeOnlyOneCatAHAHA(id: string): Cats {
    //     return this.cats.find(cats => cats.id === id)
    // }
}
