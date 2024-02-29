import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  BeforeInsert,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { AuditEntity } from './audit.entity';
import { ActiveStatusEnum } from 'src/common/enum/common.enum';
import * as bcrypt from 'bcryptjs';
import { SysPostsEntity } from './posts.entity';
import { SysCommentsEntity } from './comments.entity';

@Entity({ name: 'users' })
@Index(['id'])
export class SysUsersEntity extends AuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  userName: string;

  @Column({ type: 'varchar', length: 255 })
  passWord: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ nullable: true, type: 'varchar', length: 10 })
  dob: string;

  @Column({ default: ActiveStatusEnum.Active, type: 'int' })
  active: ActiveStatusEnum;

  @OneToMany(() => SysPostsEntity, (spe) => spe.ownerUserPost)
  @JoinTable({ name: 'id_posts' })
  posts: SysPostsEntity[];

  @OneToMany(() => SysCommentsEntity, (spe) => spe.ownerUserComment)
  @JoinTable({ name: 'id_comments' })
  commentsUser: SysCommentsEntity[];

  @BeforeInsert()
  async hashPassword() {
    this.passWord = await bcrypt.hash(this.passWord, 15);
  }

  static getSelectedFields(): string[] {
    return ['name', 'userName', 'dob', 'active', 'id', 'created_at', 'updated_at'];
  }
  
}
