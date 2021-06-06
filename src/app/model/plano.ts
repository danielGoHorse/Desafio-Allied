import { Aparelho } from "./Aparelho";

export class Plano {

  public sku!: string;
  public franquia!: string;
  public valor!: string;
  public aparelhos!: Aparelho;
  public status!: string;
}
