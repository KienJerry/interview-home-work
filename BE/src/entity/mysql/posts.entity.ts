import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
  JoinTable
} from 'typeorm';
import { AuditEntity } from './audit.entity';
import { SysUsersEntity } from './users.entity';
import { SysCommentsEntity } from './comments.entity';

@Entity({ name: 'posts' })
@Index(['id'])
export class SysPostsEntity extends AuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'text' })
  tags: string;

  @Column({ type: 'varchar', nullable: true })
  ownerId: string;

  @ManyToOne(() => SysUsersEntity, (sue) => sue.posts, { eager: true })
  @JoinColumn({ name: 'ownerId', referencedColumnName: 'id' })
  ownerUserPost: SysUsersEntity;

  @OneToMany(() => SysCommentsEntity, (sce) => sce.postsId)
  @JoinTable({ name: 'id_comment' })
  commentsPost: SysCommentsEntity[];

}
