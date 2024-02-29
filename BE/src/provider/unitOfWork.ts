
import { Injectable, Scope } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { SysUsersEntity } from 'src/entity/mysql/users.entity';
import { SysPostsEntity } from 'src/entity/mysql/posts.entity';
import { SysCommentsEntity } from 'src/entity/mysql/comments.entity';
import { DataSource } from 'typeorm';
import { LinqRepository } from 'typeorm-linq-repository';

@Injectable({ scope: Scope.REQUEST })
export class UnitOfWork {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
  ) { }

  private sys_Users: LinqRepository<SysUsersEntity>;
  SysUsersRepos(): LinqRepository<SysUsersEntity> {
    return (
      this.sys_Users ||
      (this.sys_Users = new LinqRepository(this.dataSource, SysUsersEntity))
    );
  }

  private sys_Posts: LinqRepository<SysCommentsEntity>;
  SysCommentsRepo(): LinqRepository<SysCommentsEntity> {
    return (
      this.sys_Posts ||
      (this.sys_Posts = new LinqRepository(this.dataSource, SysCommentsEntity))
    );
  }

  private sys_Comments: LinqRepository<SysPostsEntity>;
  SysPostsRepo(): LinqRepository<SysPostsEntity> {
    return (
      this.sys_Comments ||
      (this.sys_Comments = new LinqRepository(this.dataSource, SysPostsEntity))
    );
  }

}
