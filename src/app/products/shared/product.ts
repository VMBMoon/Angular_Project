import * as uuid from 'uuid';
import { Router } from '@angular/router';

export class Product {
  id = uuid.v4();
  name: string = '';
  quantity!: number;
  brand: string = ''
  expire_date?: Date;
  category: string = '';
}

