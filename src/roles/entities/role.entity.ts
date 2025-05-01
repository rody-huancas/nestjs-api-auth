import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { RolePermission } from './role-permission.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ default: false })
  isAdmin: boolean;

  @OneToMany(() => User, (user) => user.role)
  users: User[];

  @OneToMany(() => RolePermission, (rolePermission) => rolePermission.role)
  permissions: RolePermission[];
}