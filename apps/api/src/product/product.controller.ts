import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { UpdateProductDto } from './dtos/update-product.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { ProductDto } from './dtos/product.dto';
import { CreateProductDto } from './dtos/create-product.dto';

@Serialize(ProductDto)
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get('/:sku')
  findBySku(@Param('sku') sku) {
    return this.productService.findBySku(sku);
  }

  @Post()
  createProduct(@Body() body: CreateProductDto) {
    return this.productService.createProduct(body);
  }

  @Patch('/:sku')
  updateProductBySku(
    @Param('sku') sku: string,
    @Body() body: UpdateProductDto
  ) {
    return this.productService.updateBySku(sku, body);
  }

  @Delete('/:sku')
  removeProductBySku(@Param('sku') sku: string) {
    return this.productService.removeBySku(sku);
  }
}
