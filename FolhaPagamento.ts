import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from "typeorm";
import { Funcionario } from "./Funcionario";

@Entity({ schema: 'pim_unip', name: 'tbfolhapagamento' })
export class FolhaPagamento {

    @PrimaryGeneratedColumn()
    idfolhapagamento: number;

    @Column()
    idfuncionario: number;

    @ManyToOne(() => Funcionario)
    @JoinColumn({ name: 'idfuncionario' })
    funcionario: Funcionario;

    @Column({ type: 'date', nullable: false })
    dtreferencia: Date;

    @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
    vlbase: number;

    @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
    vldescontos: number;

    @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
    vlbonus: number;
}
