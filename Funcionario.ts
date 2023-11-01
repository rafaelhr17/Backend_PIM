import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Empresa } from "./Empresa";

  @Entity('tbfuncionario', { schema: 'pim_unip' })
  export class Funcionario extends BaseEntity {

  @PrimaryGeneratedColumn()
  idfuncionario: number;

  @Column()
  idempresa: number;

  @ManyToOne(() => Empresa)
  @JoinColumn({ name: 'idempresa' })
  empresa: Empresa;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nmfuncionario: string;

  @Column({ type: 'varchar', length: 11, nullable: false, unique: true })
  cpffuncionario: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  cargofuncionario: string;

  @Column({ type: 'date', nullable: true })
  dtcontratacao: Date;

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
  vlsalariobase: number;
}
