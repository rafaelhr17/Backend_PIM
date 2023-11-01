import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from "typeorm";
import { Funcionario } from "./Funcionario";

@Entity({ schema: 'pim_unip', name: 'tbcontratotrabalho' })
export class ContratoTrabalho {

    @PrimaryGeneratedColumn()
    idcontrato: number;

    @Column()
    idfuncionario: number;

    @ManyToOne(() => Funcionario)
    @JoinColumn({ name: 'idfuncionario' })
    funcionario: Funcionario;

    @Column({ type: 'date', nullable: false })
    dtiniciocontrato: Date;

    @Column({ type: 'date', nullable: true })
    dtfimcontrato: Date;

    @Column({ type: 'text', nullable: true })
    dstermoscontrato: string;
}
