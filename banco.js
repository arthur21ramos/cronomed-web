// ============================================================================
// BANCO DE DADOS MASTER - CRONOMED 2026
// ============================================================================
// Estrutura: area, subarea, tema, peso_prova, frequencia_prova, score, prioridade
// Lógica do Score: (peso_prova × 0.7) + (frequencia_prova × 0.3)
// Prioridades: 1 (Essencial: Score > 32), 2 (Importante: Score 27-31), 
//              3 (Média: Score 20-26), 4 (Baixa/Rodapé: Score < 20)

export const bancoDeMaterias = [
  // ==========================================
  // 1. CLÍNICA MÉDICA
  // ==========================================
  { "area": "Clínica Médica", "subarea": "Cardiologia", "tema": "Hipertensão Arterial Sistêmica (HAS)", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Cardiologia", "tema": "Síndrome Coronariana Aguda (IAM)", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Cardiologia", "tema": "Insuficiência Cardíaca", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Cardiologia", "tema": "Arritmias Cardíacas e Fibrilação Atrial", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Cardiologia", "tema": "Parada Cardiorrespiratória (PCR / ACLS)", "peso_prova": 10, "frequencia_prova": 85, "score": 32.5, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Cardiologia", "tema": "Valvopatias", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Cardiologia", "tema": "Endocardite Infecciosa", "peso_prova": 8, "frequencia_prova": 70, "score": 26.6, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Cardiologia", "tema": "Pericardiopatias e Miocardiopatias", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },
  { "area": "Clínica Médica", "subarea": "Cardiologia", "tema": "Doenças da Aorta (Aneurisma e Dissecção)", "peso_prova": 8, "frequencia_prova": 70, "score": 26.6, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Cardiologia", "tema": "Febre Reumática", "peso_prova": 9, "frequencia_prova": 80, "score": 30.3, "prioridade": 2 },

  { "area": "Clínica Médica", "subarea": "Pneumologia", "tema": "Asma", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Pneumologia", "tema": "DPOC", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Pneumologia", "tema": "Tuberculose", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Pneumologia", "tema": "Pneumonias (PAC e Nosocomial)", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Pneumologia", "tema": "Tromboembolismo Pulmonar (TEP)", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Pneumologia", "tema": "Derrame Pleural", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Pneumologia", "tema": "Câncer de Pulmão", "peso_prova": 8, "frequencia_prova": 70, "score": 26.6, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Pneumologia", "tema": "Doenças Pulmonares Intersticiais", "peso_prova": 7, "frequencia_prova": 60, "score": 22.9, "prioridade": 3 },
  { "area": "Clínica Médica", "subarea": "Pneumologia", "tema": "Micoses Pulmonares", "peso_prova": 6, "frequencia_prova": 50, "score": 19.2, "prioridade": 4 },

  { "area": "Clínica Médica", "subarea": "Endocrinologia", "tema": "Diabetes Mellitus: Diagnóstico e Complicações", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Endocrinologia", "tema": "Diabetes Mellitus: Tratamento", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Endocrinologia", "tema": "Hipertireoidismo e Hipotireoidismo", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Endocrinologia", "tema": "Nódulos de Tireoide e Câncer", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Endocrinologia", "tema": "Doenças da Adrenal (Cushing, Addison)", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },
  { "area": "Clínica Médica", "subarea": "Endocrinologia", "tema": "Doenças da Hipófise e Cálcio", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },
  { "area": "Clínica Médica", "subarea": "Endocrinologia", "tema": "Obesidade e Síndrome Metabólica", "peso_prova": 8, "frequencia_prova": 70, "score": 26.6, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Endocrinologia", "tema": "Dislipidemias", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },

  { "area": "Clínica Médica", "subarea": "Nefrologia", "tema": "Lesão Renal Aguda (LRA)", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Nefrologia", "tema": "Doença Renal Crônica (DRC)", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Nefrologia", "tema": "Síndrome Nefrítica e Nefrótica", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Nefrologia", "tema": "Distúrbios Ácido-Básicos", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Nefrologia", "tema": "Distúrbios do Sódio e Potássio", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Nefrologia", "tema": "Infecção do Trato Urinário (ITU)", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Nefrologia", "tema": "Litíase Renal", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },

  { "area": "Clínica Médica", "subarea": "Gastroenterologia", "tema": "DRGE e Esofagites", "peso_prova": 8, "frequencia_prova": 80, "score": 29.6, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Gastroenterologia", "tema": "Doença Ulcerosa Péptica e H. Pylori", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Gastroenterologia", "tema": "Hepatites Virais", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Gastroenterologia", "tema": "Cirrose e Complicações", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Gastroenterologia", "tema": "Pancreatite Aguda e Crônica", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Gastroenterologia", "tema": "Doença Inflamatória Intestinal (DII)", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Gastroenterologia", "tema": "Câncer Gástrico e Colorretal", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Gastroenterologia", "tema": "Sangramento Digestivo (HDA e HDB)", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Gastroenterologia", "tema": "Síndromes Disabsortivas", "peso_prova": 6, "frequencia_prova": 60, "score": 22.2, "prioridade": 3 },

  { "area": "Clínica Médica", "subarea": "Hematologia", "tema": "Anemia Ferropriva e Doença Crônica", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Hematologia", "tema": "Anemias Megaloblásticas e Hemolíticas", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Hematologia", "tema": "Doença Falciforme", "peso_prova": 9, "frequencia_prova": 80, "score": 30.3, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Hematologia", "tema": "Leucemias Agudas e Crônicas", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },
  { "area": "Clínica Médica", "subarea": "Hematologia", "tema": "Linfomas", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },
  { "area": "Clínica Médica", "subarea": "Hematologia", "tema": "Mieloma Múltiplo", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },
  { "area": "Clínica Médica", "subarea": "Hematologia", "tema": "Distúrbios da Hemostasia e Púrpuras", "peso_prova": 8, "frequencia_prova": 70, "score": 26.6, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Hematologia", "tema": "Medicina Transfusional", "peso_prova": 6, "frequencia_prova": 50, "score": 19.2, "prioridade": 4 },

  { "area": "Clínica Médica", "subarea": "Reumatologia", "tema": "Artrite Reumatoide", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Reumatologia", "tema": "Lúpus Eritematoso Sistêmico (LES)", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Reumatologia", "tema": "Gota e Artrites Microcristalinas", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Reumatologia", "tema": "Vasculites Sistêmicas", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },
  { "area": "Clínica Médica", "subarea": "Reumatologia", "tema": "Osteoartrite e Fibromialgia", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },
  { "area": "Clínica Médica", "subarea": "Reumatologia", "tema": "Esclerose Sistêmica e Sjögren", "peso_prova": 6, "frequencia_prova": 50, "score": 19.2, "prioridade": 4 },

  { "area": "Clínica Médica", "subarea": "Infectologia", "tema": "Sepse e Choque Séptico", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Infectologia", "tema": "HIV / AIDS e Oportunistas", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Infectologia", "tema": "Arboviroses (Dengue, Zika, Chikungunya, Febre Amarela)", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Infectologia", "tema": "Sífilis", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Infectologia", "tema": "Leptospirose", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Infectologia", "tema": "Malária e Leishmaniose", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Infectologia", "tema": "Doença de Chagas e Esquistossomose", "peso_prova": 8, "frequencia_prova": 70, "score": 26.6, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Infectologia", "tema": "Meningites Infecciosas", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Infectologia", "tema": "Endocardite Infecciosa", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Infectologia", "tema": "Raiva e Tétano", "peso_prova": 6, "frequencia_prova": 60, "score": 22.2, "prioridade": 3 },

  { "area": "Clínica Médica", "subarea": "Neurologia", "tema": "AVC Isquêmico e Hemorrágico", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Neurologia", "tema": "Epilepsias e Crises Convulsivas", "peso_prova": 9, "frequencia_prova": 80, "score": 30.3, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Neurologia", "tema": "Cefaleias", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Neurologia", "tema": "Demências (Alzheimer e Outras)", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Neurologia", "tema": "Doença de Parkinson", "peso_prova": 8, "frequencia_prova": 70, "score": 26.6, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Neurologia", "tema": "Polineuropatias (Guillain-Barré)", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },
  { "area": "Clínica Médica", "subarea": "Neurologia", "tema": "Esclerose Múltipla e ELA", "peso_prova": 6, "frequencia_prova": 50, "score": 19.2, "prioridade": 4 },

  { "area": "Clínica Médica", "subarea": "Psiquiatria", "tema": "Transtornos Depressivos e Risco de Suicídio", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Psiquiatria", "tema": "Transtorno Bipolar", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Psiquiatria", "tema": "Transtornos de Ansiedade e Pânico", "peso_prova": 9, "frequencia_prova": 80, "score": 30.3, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Psiquiatria", "tema": "Esquizofrenia e Psicoses", "peso_prova": 8, "frequencia_prova": 70, "score": 26.6, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Psiquiatria", "tema": "Dependência Química (Álcool e Drogas)", "peso_prova": 9, "frequencia_prova": 80, "score": 30.3, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Psiquiatria", "tema": "Delirium e Transtornos Neurocognitivos", "peso_prova": 8, "frequencia_prova": 70, "score": 26.6, "prioridade": 2 },

  { "area": "Clínica Médica", "subarea": "Dermatologia", "tema": "Lesões Elementares", "peso_prova": 8, "frequencia_prova": 70, "score": 26.6, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Dermatologia", "tema": "Hanseníase", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Clínica Médica", "subarea": "Dermatologia", "tema": "Câncer de Pele (Melanoma e Não Melanoma)", "peso_prova": 9, "frequencia_prova": 80, "score": 30.3, "prioridade": 2 },
  { "area": "Clínica Médica", "subarea": "Dermatologia", "tema": "Dermatoses Infecciosas", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },
  { "area": "Clínica Médica", "subarea": "Dermatologia", "tema": "Psoríase e Farmacodermias", "peso_prova": 7, "frequencia_prova": 60, "score": 22.9, "prioridade": 3 },

  // ==========================================
  // 2. CIRURGIA
  // ==========================================
  { "area": "Cirurgia", "subarea": "Trauma", "tema": "ATLS: Avaliação Inicial e Vias Aéreas", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Cirurgia", "subarea": "Trauma", "tema": "Choque no Trauma", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Cirurgia", "subarea": "Trauma", "tema": "Trauma Torácico", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Cirurgia", "subarea": "Trauma", "tema": "Trauma Abdominal e Pélvico", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Cirurgia", "subarea": "Trauma", "tema": "Trauma Cranioencefálico (TCE) e Raquimedular", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Cirurgia", "subarea": "Trauma", "tema": "Queimaduras", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Cirurgia", "subarea": "Trauma", "tema": "Trauma Cervical e Face", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },

  { "area": "Cirurgia", "subarea": "Cirurgia Geral", "tema": "Abdome Agudo (Geral, Inflamatório, Perfurativo)", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Cirurgia", "subarea": "Cirurgia Geral", "tema": "Apendicite Aguda", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Cirurgia", "subarea": "Cirurgia Geral", "tema": "Doenças da Vesícula e Vias Biliares", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Cirurgia", "subarea": "Cirurgia Geral", "tema": "Hérnias da Parede Abdominal", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Cirurgia", "subarea": "Cirurgia Geral", "tema": "Obstrução Intestinal", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Cirurgia", "subarea": "Cirurgia Geral", "tema": "Isquemia Mesentérica", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Cirurgia", "subarea": "Cirurgia Geral", "tema": "Cirurgia Bariátrica e Metabólica", "peso_prova": 8, "frequencia_prova": 70, "score": 26.6, "prioridade": 2 },
  { "area": "Cirurgia", "subarea": "Cirurgia Geral", "tema": "Doença Diverticular e Megacólon", "peso_prova": 9, "frequencia_prova": 80, "score": 30.3, "prioridade": 2 },
  { "area": "Cirurgia", "subarea": "Cirurgia Geral", "tema": "Cuidados Pré e Pós-Operatórios (Risco Cirúrgico)", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Cirurgia", "subarea": "Cirurgia Geral", "tema": "Complicações Cirúrgicas (Fístulas, Deiscências)", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Cirurgia", "subarea": "Cirurgia Geral", "tema": "Cicatrização, Fios e Agulhas", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },
  { "area": "Cirurgia", "subarea": "Cirurgia Geral", "tema": "Anestesiologia Básica", "peso_prova": 7, "frequencia_prova": 60, "score": 22.9, "prioridade": 3 },

  { "area": "Cirurgia", "subarea": "Especialidades Cirúrgicas", "tema": "Doença Arterial Obstrutiva Periférica (DAOP)", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Cirurgia", "subarea": "Especialidades Cirúrgicas", "tema": "Insuficiência Venosa e TVP", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Cirurgia", "subarea": "Especialidades Cirúrgicas", "tema": "Aneurisma de Aorta", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },
  { "area": "Cirurgia", "subarea": "Especialidades Cirúrgicas", "tema": "HPB e Câncer de Próstata", "peso_prova": 9, "frequencia_prova": 80, "score": 30.3, "prioridade": 2 },
  { "area": "Cirurgia", "subarea": "Especialidades Cirúrgicas", "tema": "Litíase Urinária", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Cirurgia", "subarea": "Especialidades Cirúrgicas", "tema": "Câncer de Bexiga e Vias Urinárias", "peso_prova": 6, "frequencia_prova": 50, "score": 19.2, "prioridade": 4 },
  { "area": "Cirurgia", "subarea": "Especialidades Cirúrgicas", "tema": "Fraturas e Luxações Frequentes", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },
  { "area": "Cirurgia", "subarea": "Especialidades Cirúrgicas", "tema": "Ortopedia Pediátrica", "peso_prova": 6, "frequencia_prova": 55, "score": 20.7, "prioridade": 3 },
  { "area": "Cirurgia", "subarea": "Especialidades Cirúrgicas", "tema": "Cirurgia Pediátrica (Hérnias, Atresia, Estenose de Piloro)", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Cirurgia", "subarea": "Especialidades Cirúrgicas", "tema": "Enxertos, Retalhos e Fissuras", "peso_prova": 5, "frequencia_prova": 40, "score": 15.5, "prioridade": 4 },

  // ==========================================
  // 3. GINECOLOGIA E OBSTETRÍCIA
  // ==========================================
  { "area": "Ginecologia e Obstetrícia", "subarea": "Obstetrícia", "tema": "Diagnóstico de Gravidez e Modificações Fisiológicas", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Obstetrícia", "tema": "Pré-Natal de Baixo Risco", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Obstetrícia", "tema": "Assistência ao Parto e Puerpério", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Obstetrícia", "tema": "Doença Hipertensiva Específica da Gestação (DHEG)", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Obstetrícia", "tema": "Sangramento da 1ª Metade (Aborto, Ectópica, Mola)", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Obstetrícia", "tema": "Sangramento da 2ª Metade (DPP, Placenta Prévia, Rotura)", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Obstetrícia", "tema": "Trabalho de Parto Prematuro (TPP) e RPMO", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Obstetrícia", "tema": "Vitalidade Fetal e Sofrimento Fetal", "peso_prova": 9, "frequencia_prova": 80, "score": 30.3, "prioridade": 2 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Obstetrícia", "tema": "Diabetes Gestacional", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Obstetrícia", "tema": "Infecções na Gestação (Sífilis, HIV, Toxo, GBS)", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Obstetrícia", "tema": "Restrição de Crescimento Intrauterino (CIUR) e Gemelaridade", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Obstetrícia", "tema": "Doenças Clínicas na Gestação (Tireoide, Trombofilias)", "peso_prova": 7, "frequencia_prova": 60, "score": 22.9, "prioridade": 3 },

  { "area": "Ginecologia e Obstetrícia", "subarea": "Ginecologia", "tema": "Ciclo Menstrual e Fisiologia", "peso_prova": 9, "frequencia_prova": 80, "score": 30.3, "prioridade": 2 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Ginecologia", "tema": "Anticoncepção", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Ginecologia", "tema": "Amenorreias", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Ginecologia", "tema": "Síndrome dos Ovários Policísticos (SOP)", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Ginecologia", "tema": "Sangramento Uterino Anormal (SUA)", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Ginecologia", "tema": "Miomatose Uterina", "peso_prova": 8, "frequencia_prova": 80, "score": 29.6, "prioridade": 2 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Ginecologia", "tema": "Endometriose e Adenomiose", "peso_prova": 8, "frequencia_prova": 80, "score": 29.6, "prioridade": 2 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Ginecologia", "tema": "Doenças Benignas da Mama", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Ginecologia", "tema": "Câncer de Mama: Rastreio e Diagnóstico", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Ginecologia", "tema": "Rastreio e Câncer de Colo Uterino", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Ginecologia", "tema": "Câncer de Endométrio e Ovário", "peso_prova": 8, "frequencia_prova": 70, "score": 26.6, "prioridade": 2 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Ginecologia", "tema": "ISTs e Úlceras Genitais", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Ginecologia", "tema": "Vulvovaginites e Cervicites", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Ginecologia", "tema": "Incontinência Urinária e Prolapsos", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Ginecologia", "tema": "Climatério", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Ginecologia", "tema": "Infertilidade", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },
  { "area": "Ginecologia e Obstetrícia", "subarea": "Ginecologia", "tema": "Violência Sexual", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },

  // ==========================================
  // 4. PEDIATRIA
  // ==========================================
  { "area": "Pediatria", "subarea": "Neonatologia", "tema": "Reanimação Neonatal", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Pediatria", "subarea": "Neonatologia", "tema": "Icterícia Neonatal", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Pediatria", "subarea": "Neonatologia", "tema": "Desconforto Respiratório no RN (DMH, TTRN, SALAM)", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Pediatria", "subarea": "Neonatologia", "tema": "Infecções Congênitas (TORCH, Sífilis)", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Pediatria", "subarea": "Neonatologia", "tema": "Sepse Neonatal", "peso_prova": 9, "frequencia_prova": 80, "score": 30.3, "prioridade": 2 },
  { "area": "Pediatria", "subarea": "Neonatologia", "tema": "Triagem Neonatal (Teste do Pezinho)", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },

  { "area": "Pediatria", "subarea": "Puericultura", "tema": "Aleitamento Materno", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Pediatria", "subarea": "Puericultura", "tema": "Alimentação Complementar", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Pediatria", "subarea": "Puericultura", "tema": "Crescimento e Desenvolvimento (DNPM)", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Pediatria", "subarea": "Puericultura", "tema": "Imunizações (Calendário Vacinal)", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Pediatria", "subarea": "Puericultura", "tema": "Distúrbios Nutricionais (Desnutrição e Obesidade)", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Pediatria", "subarea": "Puericultura", "tema": "Puberdade", "peso_prova": 8, "frequencia_prova": 70, "score": 26.6, "prioridade": 2 },

  { "area": "Pediatria", "subarea": "Infectologia Pediátrica", "tema": "Doenças Exantemáticas", "peso_prova": 9, "frequencia_prova": 90, "score": 33.3, "prioridade": 1 },
  { "area": "Pediatria", "subarea": "Infectologia Pediátrica", "tema": "IVAS (Resfriado, OMA, Sinusite)", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Pediatria", "subarea": "Infectologia Pediátrica", "tema": "Crupe, Epiglotite e Estridor", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Pediatria", "subarea": "Pneumologia Pediátrica", "tema": "Pneumonias na Infância", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Pediatria", "subarea": "Pneumologia Pediátrica", "tema": "Bronquiolite Viral Aguda", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Pediatria", "subarea": "Pneumologia Pediátrica", "tema": "Asma na Infância", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Pediatria", "subarea": "Pneumologia Pediátrica", "tema": "Fibrose Cística e Coqueluche", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },

  { "area": "Pediatria", "subarea": "Gastroenterologia", "tema": "Diarreia Aguda e Desidratação (TRO)", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Pediatria", "subarea": "Gastroenterologia", "tema": "Parasitoses Intestinais", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Pediatria", "subarea": "Gastroenterologia", "tema": "DRGE e Constipação na Criança", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },
  
  { "area": "Pediatria", "subarea": "Nefrologia Pediátrica", "tema": "ITU na Criança", "peso_prova": 9, "frequencia_prova": 80, "score": 30.3, "prioridade": 2 },
  { "area": "Pediatria", "subarea": "Nefrologia Pediátrica", "tema": "Síndrome Nefrítica (GNPE)", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Pediatria", "subarea": "Nefrologia Pediátrica", "tema": "Síndrome Nefrótica em Pediatria", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },

  { "area": "Pediatria", "subarea": "Especialidades", "tema": "Anemias Carenciais na Infância", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Pediatria", "subarea": "Especialidades", "tema": "Leucemias e Tumores na Infância", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },
  { "area": "Pediatria", "subarea": "Especialidades", "tema": "Febre Reumática e Doença de Kawasaki", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Pediatria", "subarea": "Especialidades", "tema": "Cardiopatias Congênitas (Cianóticas e Acianóticas)", "peso_prova": 8, "frequencia_prova": 70, "score": 26.6, "prioridade": 2 },
  { "area": "Pediatria", "subarea": "Emergências Pediátricas", "tema": "Maus-Tratos na Infância", "peso_prova": 9, "frequencia_prova": 80, "score": 30.3, "prioridade": 2 },
  { "area": "Pediatria", "subarea": "Emergências Pediátricas", "tema": "Intoxicações Exógenas e Acidentes Ofídicos", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Pediatria", "subarea": "Emergências Pediátricas", "tema": "Convulsão Febril", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },

  // ==========================================
  // 5. PREVENTIVA
  // ==========================================
  { "area": "Preventiva", "subarea": "Epidemiologia", "tema": "Indicadores de Saúde (Mortalidade e Morbidade)", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Preventiva", "subarea": "Epidemiologia", "tema": "Transição Demográfica e Epidemiológica", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Preventiva", "subarea": "Epidemiologia", "tema": "Estudos Epidemiológicos", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Preventiva", "subarea": "Epidemiologia", "tema": "Medidas de Associação e Risco (RR, OR, RP)", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Preventiva", "subarea": "Epidemiologia", "tema": "Testes Diagnósticos (Sensibilidade, Especificidade, VPP, VPN)", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Preventiva", "subarea": "Epidemiologia", "tema": "Vigilância em Saúde e Notificação Compulsória", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Preventiva", "subarea": "Epidemiologia", "tema": "Surtos, Epidemias e Endemias", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Preventiva", "subarea": "Epidemiologia", "tema": "Bioestatística Básica", "peso_prova": 7, "frequencia_prova": 65, "score": 24.4, "prioridade": 3 },

  { "area": "Preventiva", "subarea": "Políticas de Saúde (SUS)", "tema": "História das Políticas de Saúde no Brasil", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Preventiva", "subarea": "Políticas de Saúde (SUS)", "tema": "Princípios e Diretrizes do SUS", "peso_prova": 10, "frequencia_prova": 95, "score": 35.5, "prioridade": 1 },
  { "area": "Preventiva", "subarea": "Políticas de Saúde (SUS)", "tema": "Lei 8.080/90 (Lei Orgânica da Saúde)", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Preventiva", "subarea": "Políticas de Saúde (SUS)", "tema": "Lei 8.142/90 (Participação da Comunidade e Financiamento)", "peso_prova": 9, "frequencia_prova": 80, "score": 30.3, "prioridade": 2 },
  { "area": "Preventiva", "subarea": "Políticas de Saúde (SUS)", "tema": "Decreto 7.508/11 e Redes de Atenção à Saúde", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },

  { "area": "Preventiva", "subarea": "Medicina de Família e Comunidade", "tema": "Atributos da APS e PNAB", "peso_prova": 10, "frequencia_prova": 90, "score": 34.0, "prioridade": 1 },
  { "area": "Preventiva", "subarea": "Medicina de Família e Comunidade", "tema": "Ferramentas de Abordagem Familiar (Genograma e Ecomapa)", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 },
  { "area": "Preventiva", "subarea": "Medicina de Família e Comunidade", "tema": "Método Clínico Centrado na Pessoa (MCCP)", "peso_prova": 8, "frequencia_prova": 70, "score": 26.6, "prioridade": 2 },

  { "area": "Preventiva", "subarea": "Saúde do Trabalhador e Ética", "tema": "Saúde do Trabalhador e Doenças Ocupacionais (LER/DORT, Pneumoconioses)", "peso_prova": 9, "frequencia_prova": 80, "score": 30.3, "prioridade": 2 },
  { "area": "Preventiva", "subarea": "Saúde do Trabalhador e Ética", "tema": "Acidentes de Trabalho e CAT", "peso_prova": 8, "frequencia_prova": 70, "score": 26.6, "prioridade": 2 },
  { "area": "Preventiva", "subarea": "Saúde do Trabalhador e Ética", "tema": "Ética Médica e Bioética", "peso_prova": 9, "frequencia_prova": 85, "score": 31.8, "prioridade": 1 },
  { "area": "Preventiva", "subarea": "Saúde do Trabalhador e Ética", "tema": "Atestado de Óbito", "peso_prova": 8, "frequencia_prova": 75, "score": 28.1, "prioridade": 2 }
];
