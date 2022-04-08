import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true, default: '' })
  description: string;

  @Column({ nullable: true })
  deadline: string;

  @CreateDateColumn()
  createdAt?;

  @UpdateDateColumn()
  updatedAt?;

  @DeleteDateColumn()
  deletedAt?;
}
