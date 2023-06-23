import axios from 'axios';

const api = axios.create({
  baseURL: 'https://plataforma-develop-pp6d7tx7ka-rj.a.run.app/',
});

export default class Api {
  static getTop10Produtos = async () => {
    try {
      const { data } = await api.get('api/teste/top-10-produtos');
      return data;
    } catch (_) {
      return 'Erro ao carregar os produtos';
    }
  };

  static getFaturamentoAnual = async () => {
    try {
      const { data } = await api.get('api/teste/faturamento-anual');
      return data;
    } catch (_) {
      return 'Erro ao carregar o faturamento anual';
    }
  };
}
