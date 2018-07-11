import { createAction } from 'redux-actions';

export const CLASSIFICAR_DENUNCIA_REQUISICAO = 'CLASSIFICAR_DENUNCIA_REQUISICAO';
export const CLASSIFICAR_DENUNCIA_SUCESSO = 'CLASSIFICAR_DENUNCIA_SUCESSO';
export const CLASSIFICAR_DENUNCIA_FALHA = 'CLASSIFICAR_DENUNCIA_FALHA';

export const classificarDenunciaRequisicao = createAction(CLASSIFICAR_DENUNCIA_REQUISICAO);
export const classificarDenunciaSucesso = createAction(CLASSIFICAR_DENUNCIA_SUCESSO);
export const classificarDenunciaFalha = createAction(CLASSIFICAR_DENUNCIA_FALHA);
