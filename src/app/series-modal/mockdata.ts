import Series from '../shared/models/series.model';

const mockdata: Array<Series> = [
	{
		cardImage:
			'https://occ-0-782-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSKVUiNlI2oEN2Iz_DrKznVcOuKb2yOn4sretHhVtD8ZZ8pQxHQd7oFwdBv4H6SEYIPNcSE3BY5xHZD0W5oCMnym-2VdqV5If6E_wesDvNjx5B1k-GG8K4Xh0kdRpPsYtwooJtajb1scR4FJOWtDipz-TQinJSL-FWI85qkPyw596EfoFHZbCsg.jpg?r=40f',
		titleImage:
			'https://occ-0-782-185.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZDps0iIQpLs8QwPcuCmNKY5eFanBALbIyNcXuMdxLWkA7oZyVS5Q-lkds90XnxxuKLTcOj8BiDADleGQm2D93RfdgEQfcZyTBZqBjpYK42_Obb7FmAz4WGrO_uJAKF6AVIbrrh-_D-uFRySpLgyNP5PkO39dF3n5c6P41UEd5BO.webp?r=eb2',
		backgroundImage:
			'https://istoe.com.br/wp-content/uploads/sites/14/2021/10/alerta-vermelho.jpg',
		relevance: 99,
		year: 2021,
		minAge: 12,
		time: 117,
		season: null,
		description:
			'Um agente do FBI persegue o ladrão de arte mais procurado do mundo. Ele só não esperava ter seu alvo como parceiro para prender uma bandida muito esperta.',
		cast: ['Dwayne Johnson', 'Ryan Reynolds', 'Gal Gadot'],
		genre: ['ação e aventura', 'comédia', 'policiais'],
		scenes: ['irreverentes', 'empolgantes'],
	},
	{
		cardImage:
			'https://occ-0-782-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVDivwxFIqwL_j1qDltG6wsY0ijRFdMYta7HmDZJ8MTpj4ybog22QEHi1nfrC17Z05aUrP_252fmoWIp9-gmL8PYX6JS6IOM_kTqGcjWuOOVm_9JIx39tMw7iINq.jpg?r=c00',
		titleImage:
			'https://occ-0-782-185.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbppP7QcnQ4KQqqA3SlWS8o50Sb-wHesZczciw3k1uC5MYUgvzjSIkLvRQImzPKiSCeSwWZLm3lB43GiduX1uX7jm7ZZm2TmFHgd02dDUhp7YmOJOKMhFSxt7LFkE4gUv8U1ewiR9wmU7L9QQCgcFpJu0VHhm3BYEUp21HkgGyh0.webp?r=4ce',
		backgroundImage:
			'https://s2.glbimg.com/_jcpGCq4iEgBp2xIC-IajNixRyo=/0x0:1037x547/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/Z/V/nTDEXhSPaZmBjjBHXvbA/arcane.jpg',
		relevance: 98,
		year: 2021,
		minAge: 14,
		time: null,
		season: 1,
		description:
			'Em meio ao conflito entre as cidades-gêmeas de Piltover e Zaun, duas irmãs lutam em lados opostos de uma guerra entre tecnologias mágicas e convicções incompatíveis.',
		cast: ['Hailee Steinfeld', 'Katie Leung', 'Kevin Alejandro'],
		genre: [
			'séries de fantasia',
			'séries dos EUA',
			'séries de ação e aventura',
		],
		scenes: ['realistas'],
	},
	{
		cardImage:
			'https://occ-0-782-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVnMIFnqVI4UrguXphQASCmPck3AZ5ThGci07Rp0x7Vv52yOueoOXP9DC8c2pGPlV4NPv_5kklugkVl2aN4f4M2Lf3UDDhZsqJgy4dFcuVqYi7l_Bws9SaXj2OkJ.jpg?r=31e',
		titleImage:
			'https://occ-0-782-185.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABWcLm9voroxQhrlWIyG7nH_sKORBcUpTg30xfPqwvT1MDk52NDPYqEkePHs6So5YxVnY9n67Ax6qehWUk8XVeJCqvpiUfPPKuUvbMtQNQ5eMU2W_VZ7FEJjnfT5ueYBVXgk9jPxez0edJh2zzHiQQdnDcTKAF1FLECPd2IungSza.webp?r=da2',
		backgroundImage:
			'https://br.web.img3.acsta.net/newsv7/21/06/14/20/47/5896914.jpg',
		relevance: 98,
		year: 2021,
		minAge: 16,
		time: null,
		season: 6,
		description:
			'Entediado com a vida nas trevas, o diabo se muda para Los Angeles, abre um piano-bar e empresta sua sabedoria a uma investigadora de assassinatos.',
		cast: ['Tom Ellis', 'Lauren German', 'Kevin Alejandro'],
		genre: ['séries policiais', 'séries de fantasia', 'séries baseadas em HQ'],
		scenes: ['irreverentes', 'empolgantes'],
	},
];

export default mockdata;
