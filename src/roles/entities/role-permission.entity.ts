import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Role } from './role.entity';
import { Permission } from '../../permissions/entities/permission.entity';

@Entity()
export class RolePermission {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Role, (role) => role.permissions)
  @JoinColumn({ name: 'roleId' })
  role: Role;

  @ManyToOne(() => Permission, (permission) => permission.rolePermissions)
  @JoinColumn({ name: 'permissionId' })
  permission: Permission;

  @Column()
  roleId: number;

  @Column()
  permissionId: number;

  @Column({ default: true })
  canRead: boolean;

  @Column({ default: false })
  canWrite: boolean;

  @Column({ default: false })
  canUpdate: boolean;

  @Column({ default: false })
  canDelete: boolean;
}