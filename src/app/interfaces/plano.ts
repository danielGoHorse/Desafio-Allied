import { Aparelho } from "./aparelho";

export class Plano {

  public sku!: string;
  public franquia!: string;
  public valor!: string;
  public aparelho!: Aparelho;
  public ativo!: boolean;
}
