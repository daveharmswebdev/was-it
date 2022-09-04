import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private repo: Repository<Product>) {}

  // create() {}

  findAll() {
    return this.repo.find();
  }

  async findBySku(sku: string) {
    const product = await this.repo.findOne({ where: { sku } });

    if (!product) {
      throw new NotFoundException(`Resource with sku ${sku} not found.`);
    }

    return product;
  }

  async updateBySku(sku: string, attrs: Partial<Product>) {
    const product = await this.findBySku(sku);

    Object.assign(product, attrs);

    return this.repo.save(product);
  }

  async removeBySku(sku: string) {
    const product = await this.findBySku(sku);

    return this.repo.remove(product);
  }
}
