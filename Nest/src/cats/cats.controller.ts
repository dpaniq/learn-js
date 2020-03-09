import { Controller, Get, Query, Post, Body, Put, Param, Delete, HttpCode } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto/create-cat.dto'
import { CatsService } from './cats.service'
import { Cats } from './interfaces/cats.interface'


// 36:42 https://www.youtube.com/watch?v=wqhNoDE6pb4&t=2495s
@Controller('cats')
export class CatsController {
	constructor (private readonly catsService: CatsService) {}

	@Get()
	async findAll(): Promise<Cats[]> {
		return this.addServiceAndInterfaceLookHow()
	}
	async addServiceAndInterfaceLookHow(): Promise<Cats[]> {
		return this.catsService.ComebackCats()
	}

	@Get(':id')
	async findOne(@Param('id') id): Promise<Cats>{
		return this.catsService.ComeOnlyOneCatAHAHA(id)
	}

	// Send-data -> Content-type/ Send-format -> json/file
	@Post()
	create(@Body() createCatDto: CreateCatDto): string {
		return `The cats name is ${createCatDto.name} and he ${createCatDto.age} month old, becouse he birth at ${createCatDto.birth}`
	}

	@Delete(':id')
	delete(@Param('id') id): string {
		return `Delete ${id}`
	}

	@Put(':id')
	update(@Body() updateCatDto: CreateCatDto, @Param('id') id): string {
		return `WAS: The cats name is ${updateCatDto.name} with #${id} number`
	}
}