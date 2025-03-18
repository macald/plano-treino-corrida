// Arquivo: src/components/PlanoTreino.jsx
import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, Play, Timer, CheckCircle, Clock } from 'lucide-react';

// Dados do plano de treino incorporados diretamente
const DADOS_TREINO = [
  {
    "Semana": 1,
    "Dia": "Terça",
    "Data": "18/03/2025",
    "Treino": "8x 600m (6:40-7:00/km) + 400m (7:10-7:30/km)",
    "Aquecimento": "1.5km de trote",
    "Principal": "8 repetições de (600m a 6:40-7:00/km + 400m a 7:10-7:30/km)",
    "Desaquecimento": "10 minutos de trote",
    "Objetivo": "Desenvolver resistência de velocidade misturando intensidades",
    "Concluído": null
  },
  {
    "Semana": 1,
    "Dia": "Quinta",
    "Data": "20/03/2025",
    "Treino": "4km (7:40-8:00/km) + 5km (6:40-7:00/km)",
    "Aquecimento": "1.5km de trote",
    "Principal": "4km a 7:40-8:00/km + 5km a 6:40-7:00/km",
    "Desaquecimento": "10 minutos de trote",
    "Objetivo": "Simular o fim de corrida, quando já estamos cansados mas precisamos manter o ritmo",
    "Concluído": null
  },
  {
    "Semana": 1,
    "Dia": "Sábado",
    "Data": "22/03/2025",
    "Treino": "16km (7:10-7:30/km)",
    "Aquecimento": "10 minutos de trote",
    "Principal": "16km a 7:10-7:30/km",
    "Desaquecimento": "10 minutos de trote",
    "Objetivo": "Desenvolver resistência aeróbica e acostumar-se com longas distâncias",
    "Concluído": null
  },
  {
    "Semana": 2,
    "Dia": "Terça",
    "Data": "25/03/2025",
    "Treino": "9x 3' (6:40-7:00/km) + 2' (7:40-8:00/km)",
    "Aquecimento": "1.5km de trote",
    "Principal": "9 repetições de (3 minutos a 6:40-7:00/km + 2 minutos a 7:40-8:00/km)",
    "Desaquecimento": "10 minutos de trote",
    "Objetivo": "Trabalhar resistência e capacidade de recuperação rápida",
    "Concluído": null
  },
  {
    "Semana": 2,
    "Dia": "Quinta",
    "Data": "27/03/2025",
    "Treino": "5x 1km (6:40-7:00/km) + 1km (7:40-8:00/km)",
    "Aquecimento": "1.5km de trote",
    "Principal": "5 repetições de (1km a 6:40-7:00/km + 1km a 7:40-8:00/km)",
    "Desaquecimento": "10 minutos de trote",
    "Objetivo": "Desenvolver ritmo de prova com recuperação ativa",
    "Concluído": null
  },
  {
    "Semana": 2,
    "Dia": "Sábado",
    "Data": "29/03/2025",
    "Treino": "18km (7:10-7:30/km)",
    "Aquecimento": "10 minutos de trote",
    "Principal": "18km a 7:10-7:30/km",
    "Desaquecimento": "10 minutos de trote",
    "Objetivo": "Aumentar a resistência para aproximar-se da distância da meia maratona",
    "Concluído": null
  },
  {
    "Semana": 3,
    "Dia": "Terça",
    "Data": "01/04/2025",
    "Treino": "10x 200m (6:00-6:30/km) + 200m (7:40-8:00/km)",
    "Aquecimento": "1.5km de trote",
    "Principal": "10 repetições de (200m a 6:00-6:30/km + 200m a 7:40-8:00/km)",
    "Desaquecimento": "10 minutos de trote",
    "Objetivo": "Trabalhar explosão e capacidade anaeróbica",
    "Concluído": null
  },
  {
    "Semana": 3,
    "Dia": "Quinta",
    "Data": "03/04/2025",
    "Treino": "10km progressivo",
    "Aquecimento": "1.5km de trote",
    "Principal": "10km com aumento de ritmo: 2km (7:40/km), 2km (7:30/km), 2km (7:20/km), 2km (7:10/km), 2km (7:00/km)",
    "Desaquecimento": "10 minutos de trote",
    "Objetivo": "Simular estratégia de corrida com aumento progressivo de ritmo",
    "Concluído": null
  },
  {
    "Semana": 3,
    "Dia": "Sábado",
    "Data": "05/04/2025",
    "Treino": "19km (7:10-7:30/km)",
    "Aquecimento": "10 minutos de trote",
    "Principal": "19km a 7:10-7:30/km",
    "Desaquecimento": "10 minutos de trote",
    "Objetivo": "Último longo antes do polimento, próximo à distância da prova",
    "Concluído": null
  },
  {
    "Semana": 4,
    "Dia": "Terça",
    "Data": "08/04/2025",
    "Treino": "7km (7:40-8:00/km)",
    "Aquecimento": "1.5km de trote",
    "Principal": "7km a 7:40-8:00/km",
    "Desaquecimento": "10 minutos de trote",
    "Objetivo": "Manter atividade reduzindo volume e intensidade para recuperação",
    "Concluído": null
  },
  {
    "Semana": 4,
    "Dia": "Quinta",
    "Data": "10/04/2025",
    "Treino": "5km (7:10-7:30/km)",
    "Aquecimento": "1.5km de trote",
    "Principal": "5km a 7:10-7:30/km",
    "Desaquecimento": "10 minutos de trote",
    "Objetivo": "Manter ritmo sem desgaste excessivo",
    "Concluído": null
  },
  {
    "Semana": 4,
    "Dia": "Domingo",
    "Data": "13/04/2025",
    "Treino": "MEIA MARATONA - 21.1km",
    "Aquecimento": "10-15 minutos de trote leve e alongamentos dinâmicos",
    "Principal": "Estratégia: primeiros 5km (7:30-7:40/km), 5-15km (7:20-7:30/km), últimos 6km (7:10-7:20/km ou mais rápido se possível)",
    "Desaquecimento": "-",
    "Objetivo": "Completar a Meia Maratona de São Paulo",
    "Concluído": null
  }
];

const PlanoTreino = () => {
  const [treinos] = useState(DADOS_TREINO);
  const [dataSelecionada, setDataSelecionada] = useState('');
  const [treinoSelecionado, setTreinoSelecionado] = useState(null);

  useEffect(() => {
    // Seleciona a primeira data por padrão
    if (treinos.length > 0) {
      setDataSelecionada(treinos[0].Data);
      setTreinoSelecionado(treinos[0]);
    }
  }, [treinos]);

  const handleDataChange = (valor) => {
    setDataSelecionada(valor);
    const treino = treinos.find(t => t.Data === valor);
    setTreinoSelecionado(treino);
  };

  const getBadgeStatus = (concluido) => {
    if (concluido === 1) {
      return <Badge className="bg-green-500">Concluído</Badge>;
    } else if (concluido === 0) {
      return <Badge className="bg-red-500">Não concluído</Badge>;
    } else {
      return <Badge className="bg-yellow-500">Pendente</Badge>;
    }
  };
  
  const formatarData = (dataString, dia) => {
    return `${dataString} (${dia})`;
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4">
      <div className="w-full mb-8">
        <Select 
          value={dataSelecionada} 
          onValueChange={handleDataChange}
        >
          <SelectTrigger className="w-full bg-white border-gray-200 rounded-lg shadow-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <SelectValue placeholder="Selecione uma data" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-lg">
            {treinos.map((treino) => (
              <SelectItem 
                key={treino.Data} 
                value={treino.Data}
                className="hover:bg-gray-100 cursor-pointer"
              >
                {formatarData(treino.Data, treino.Dia)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {treinoSelecionado && (
        <Card className="w-full shadow-lg">
          <CardHeader className="bg-slate-50">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl">
                  <span className="flex items-center gap-2">
                    <Calendar size={20} />
                    {formatarData(treinoSelecionado.Data, treinoSelecionado.Dia)}
                  </span>
                </CardTitle>
                <CardDescription className="mt-1">
                  Semana {treinoSelecionado.Semana}
                </CardDescription>
              </div>
              <div>
                {getBadgeStatus(treinoSelecionado.Concluído)}
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Clock size={18} />
                Treino
              </h3>
              <p className="text-slate-700">{treinoSelecionado.Treino}</p>
            </div>
            
            <Separator className="my-4" />
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h3 className="text-md font-semibold flex items-center gap-1">
                  <Play size={16} />
                  Aquecimento
                </h3>
                <p className="text-sm text-slate-600">{treinoSelecionado.Aquecimento}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-md font-semibold flex items-center gap-1">
                  <Clock size={16} />
                  Principal
                </h3>
                <p className="text-sm text-slate-600">{treinoSelecionado.Principal}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-md font-semibold flex items-center gap-1">
                  <Timer size={16} />
                  Desaquecimento
                </h3>
                <p className="text-sm text-slate-600">{treinoSelecionado.Desaquecimento}</p>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="bg-slate-50 p-4">
            <div className="w-full">
              <h3 className="text-md font-semibold mb-1">Objetivo:</h3>
              <p className="text-slate-700">{treinoSelecionado.Objetivo}</p>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default PlanoTreino;