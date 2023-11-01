import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from "typeorm";
import { Funcionario } from "./Funcionario";

@Entity({ schema: 'pim_unip', name: 'tbempresa' })
export class Empresa {

    @PrimaryGeneratedColumn()
    idempresa: number;

    @OneToMany(() => Funcionario, funcionario => funcionario.empresa)
    funcionarios: Funcionario[];
    

    @Column({ type: 'varchar', length: 255, nullable: false })
    nmempresa: string;

    @Column({ type: 'varchar', length: 14, nullable: false, unique: true })
    cnpjempresa: string;

    @Column({ type: 'text', nullable: true })
    enderecoempresa: string;

    @Column({ type: 'varchar', length: 15, nullable: true })
    telefoneempresa: string;
}