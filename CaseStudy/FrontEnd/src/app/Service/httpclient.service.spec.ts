import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule , HttpTestingController} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpclientService } from './httpclient.service';

describe('HttpclientService', () => {
  let service: HttpclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
    });
    service = TestBed.inject(HttpclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
