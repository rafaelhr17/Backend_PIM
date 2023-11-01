import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    Timestamp
} from "typeorm";
import { Funcionario } from "./Funcionario";

@Entity({ schema: 'pim_unip', name: 'tbcontroleponto' })
export class ControlePonto {

    @PrimaryGeneratedColumn()
    idponto: number;

    @Column()
    idfuncionario: number;

    @ManyToOne(() => Funcionario)
    @JoinColumn({ name: 'idfuncionario' })
    funcionario: Funcionario;

    @Column({ type: 'timestamp', nullable: false })
    dthrentrada: Date;

    @Column({ type: 'timestamp', nullable: true })
    dthrsaida: Date;
}
