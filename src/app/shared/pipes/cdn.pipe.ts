import { environment } from 'environments/environment';
import { Pipe, PipeTransform } from '@angular/core';
/*
 * prefix with cloudinary api
 * Usage:
 *   value | cdn
 * Example:
 *   {{ 'xyz.png' | cdn }}
 *   formats to: https://res.cloudinary.com/demo/upload/xyz.png
*/
@Pipe({ name: 'cdn' })
export class CDNPipe implements PipeTransform {
  transform(file_name: string) {
    return `${environment.cloudinary_api}${file_name}`;
  }
}
