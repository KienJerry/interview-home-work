import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { AuditEntity } from './audit.entity';
import { SysUsersEntity } from './users.entity';
import { SysPostsEntity } from './posts.entity';

@Entity({ name: 'comments' })
@Index(['id'])
export class SysCommentsEntity extends AuditEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'varchar', nullable: true })
  ownerId: string;

  @Column({ type: 'varchar', nullable: true })
  postId: string;

  @ManyToOne(() => SysUsersEntity, (sue) => sue.commentsUser, { eager: true })
  @JoinColumn({ name: 'ownerId', referencedColumnName: 'id' })
  ownerUserComment: SysUsersEntity;

  @ManyToOne(() => SysPostsEntity, (sue) => sue.commentsPost, { eager: true })
  @JoinColumn({ name: 'postId', referencedColumnName: 'id' })
  postsId: SysPostsEntity;

}
