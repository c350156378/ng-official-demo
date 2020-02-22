/*
 * @Author: your name
 * @Date: 2019-12-14 18:00:04
 * @LastEditTime : 2019-12-19 13:09:55
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\atable\atable.component.ts
 */
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AtableItem } from './atable-datasource';
import { HttpClient } from '@angular/common/http';
import { AtableService } from './atable.service';
import { merge, fromEvent } from 'rxjs';
import { startWith, switchMap, map, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-atable',
  templateUrl: './atable.component.html',
  styleUrls: ['./atable.component.css']
})
export class AtableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<AtableItem>;
  @ViewChild('input', { static: false }) input: ElementRef;
  @ViewChild('input2', { static: false }) input2: ElementRef;
  dataSource: AtableItem[];
  totalCount: Number;
  pageSize = 10;
  pager: number = 0;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['index', '_id', 'red1', 'red2', 'red3', 'red4', 'red5', 'red6','allred',  'blue', 'date', 'oddeven'];

  constructor(private http: HttpClient, private atableService: AtableService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    //排序变动
    this.sort.sortChange.subscribe(() => { this.paginator.pageIndex = 0; this.pager = 0; });
    //翻页或者页面展示数量变动
    this.paginator.page.subscribe(res => {
      this.pageSize = res.pageSize;
      this.pager = res.pageIndex * this.pageSize;
    });

    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(() => {
          this.paginator.pageIndex = 0;
          this.pager = 0;
          return this.getLottery();
        }),
        map(data => {
          return data
        })
      ).subscribe(data => {
        this.dataSource = data.data;
        this.totalCount = data.totalCount;
      })
    fromEvent(this.input2.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(() => {
          this.paginator.pageIndex = 0;
          this.pager = 0;
          return this.getLottery();
        }),
        map(data => {
          return data
        })
      ).subscribe(data => {
        this.dataSource = data.data;
        this.totalCount = data.totalCount;
      })


    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.getLottery();
        }),
        map(data => {
          return data
        })
      ).subscribe(data => {
        this.dataSource = data.data;
        this.totalCount = data.totalCount;
      })
  }

  getLottery() {
    return this.atableService.getLottery(
      this.sort.active || '_id',
      this.sort.direction || 'desc',
      this.paginator.pageIndex,
      this.pageSize,
      this.input.nativeElement.value.trim(), this.input2.nativeElement.value.trim())
  }
}
