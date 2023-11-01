import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from "typeorm";
import { Funcionario } from "./Funcionario";

@Entity({ schema: 'pim_unip', name: 'tbreciboferias' })
export class ReciboFerias {

    @PrimaryGeneratedColumn()
    idrecibo: number;

    @Column()
    idfuncionario: number;

    @ManyToOne(() => Funcionario)
    @JoinColumn({ name: 'idfuncionario' })
    funcionario: Funcionario;

    @Column({ type: 'date', nullable: false })
    dtinicioferias: Date;

    @Column({ type: 'date', nullable: false })
    dtfimferias: Date;

    @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
    vlferias: number;
}
