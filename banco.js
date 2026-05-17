// ═══════════════════════════════════════════════════════════════════
// CRONOMED — BANCO DE MATÉRIAS UNIFICADO
// ═══════════════════════════════════════════════════════════════════
//
// Estrutura de cada item:
//   area          → grande área (ex: "Clínica Médica", "Cirurgia")
//   subarea       → subespecialidade (ex: "Cardiologia", "Trauma")
//   tema          → nome do tema (ex: "Hipertensão Arterial Sistêmica")
//   peso_prova    → peso relativo nas provas brasileiras (1-10)
//   frequencia_prova → % de provas que incluem o tema (0-100)
//   score         → (peso × frequência) / 100 — usado pelo algoritmo
//   prioridade    → 1=Alta · 2=Média · 3=Baixa · 4=Opcional
//                   Você pode alterar a prioridade de qualquer tema
//                   diretamente neste arquivo.
//
// Total de temas: ~739
// ═══════════════════════════════════════════════════════════════════

window.bancoDeMaterias = [

    // ═══════════════════════════════════════════════════════════════
    // BANCO ORIGINAL — Clínica, Cirurgia, Pediatria, GO, Preventiva
    // ═══════════════════════════════════════════════════════════════
{ area: "Clínica Médica", subarea: "Cardiologia", tema: "Hipertensão Arterial Sistêmica", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Síndrome Coronariana Aguda", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Insuficiência Cardíaca", peso_prova: 10, frequencia_prova: 90, score: 35, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Arritmias Cardíacas", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Parada Cardiorrespiratória", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Diabetes Mellitus", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Doenças da Tireoide", peso_prova: 9, frequencia_prova: 90, score: 33.3, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Dislipidemia", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Pneumonia", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Asma", peso_prova: 9, frequencia_prova: 90, score: 33.3, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "DPOC", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Tromboembolismo Pulmonar", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Acidente Vascular Cerebral", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Epilepsia", peso_prova: 9, frequencia_prova: 80, score: 31, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Lesão Renal Aguda", peso_prova: 10, frequencia_prova: 90, score: 35, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Doença Renal Crônica", peso_prova: 10, frequencia_prova: 85, score: 33.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Distúrbios Hidroeletrolíticos", peso_prova: 10, frequencia_prova: 90, score: 35, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Hemorragia Digestiva Alta", peso_prova: 10, frequencia_prova: 90, score: 35, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Doença Hepática Crônica", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Sepse e Choque Séptico", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Infecção do Trato Urinário", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Anemias", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Trauma", tema: "ATLS e Avaliação Inicial do Trauma", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Abdome Agudo", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Apendicite Aguda", peso_prova: 9, frequencia_prova: 90, score: 33.3, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Colecistite e Colelitíase", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Reanimação Neonatal", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Geral", tema: "Puericultura", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia", tema: "Doença Hipertensiva da Gestação", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Preventiva", subarea: "Saúde Pública", tema: "Princípios do SUS", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Síndromes Aórticas Agudas", peso_prova: 9, frequencia_prova: 80, score: 31, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Valvopatias", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Obesidade", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Síndrome Metabólica", peso_prova: 8, frequencia_prova: 70, score: 27, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Derrame Pleural", peso_prova: 8, frequencia_prova: 70, score: 27, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Cefaleias", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Distúrbios Ácido-Base", peso_prova: 9, frequencia_prova: 80, score: 31, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Pancreatite Aguda", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Diarreia Aguda", peso_prova: 8, frequencia_prova: 70, score: 27, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Endocardite Infecciosa", peso_prova: 9, frequencia_prova: 80, score: 31, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Pneumonias Atípicas", peso_prova: 8, frequencia_prova: 70, score: 27, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Lúpus Eritematoso Sistêmico", peso_prova: 9, frequencia_prova: 80, score: 31, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Artrite Reumatoide", peso_prova: 9, frequencia_prova: 80, score: 31, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Depressão", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Transtornos de Ansiedade", peso_prova: 9, frequencia_prova: 80, score: 31, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Hérnias da Parede Abdominal", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Perfuração de Víscera Oca", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Vascular", tema: "Trombose Venosa Profunda", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Vascular", tema: "Tromboembolismo Pulmonar Cirúrgico", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Urologia", tema: "Litíase Urinária", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Urologia", tema: "Hiperplasia Prostática Benigna", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Geral", tema: "Infecções Respiratórias Agudas", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Geral", tema: "Bronquiolite", peso_prova: 9, frequencia_prova: 90, score: 33.3, prioridade: 1 },
    { area: "Pediatria", subarea: "Geral", tema: "Otite Média Aguda", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia", tema: "Trabalho de Parto Prematuro", peso_prova: 10, frequencia_prova: 90, score: 35, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Ginecologia", tema: "Infecções Sexualmente Transmissíveis", peso_prova: 10, frequencia_prova: 90, score: 35, prioridade: 1 },
    { area: "Preventiva", subarea: "Epidemiologia", tema: "Medidas de Associação e Risco", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Preventiva", subarea: "Epidemiologia", tema: "Tipos de Estudo", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Pericardite e Miocardite", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Doença Arterial Coronariana Crônica", peso_prova: 8, frequencia_prova: 70, score: 26, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Hipoglicemia", peso_prova: 8, frequencia_prova: 70, score: 26, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Doenças da Hipófise", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Doenças Intersticiais Pulmonares", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Doença de Parkinson", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Esclerose Múltipla", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Síndrome Nefrótica", peso_prova: 8, frequencia_prova: 70, score: 26, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Síndrome Nefrítica", peso_prova: 8, frequencia_prova: 70, score: 26, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Doença Inflamatória Intestinal", peso_prova: 8, frequencia_prova: 70, score: 26, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Doença do Refluxo Gastroesofágico", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Tuberculose", peso_prova: 9, frequencia_prova: 80, score: 31, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "HIV", peso_prova: 9, frequencia_prova: 80, score: 31, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Coagulopatias", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Espondiloartrites", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Gota", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Transtorno Bipolar", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Esquizofrenia", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Obstrução Intestinal", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Diverticulite", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Vascular", tema: "Doença Arterial Obstrutiva Periférica", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Proctologia", tema: "Hemorroidas", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Urologia", tema: "Câncer de Próstata", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Pediatria", subarea: "Geral", tema: "Infecção do Trato Urinário", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Geral", tema: "Doenças Exantemáticas", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Geral", tema: "Anemias na Infância", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Ginecologia", tema: "Doença Inflamatória Pélvica", peso_prova: 9, frequencia_prova: 80, score: 31, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Ginecologia", tema: "Endometriose", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Preventiva", subarea: "Epidemiologia", tema: "Rastreamento", peso_prova: 9, frequencia_prova: 90, score: 33.3, prioridade: 2 },
    { area: "Preventiva", subarea: "Saúde Pública", tema: "Atenção Primária à Saúde", peso_prova: 9, frequencia_prova: 90, score: 33.3, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Hipertensão Secundária", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Cardiomiopatias", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Doenças da Adrenal (Cushing e Addison)", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Distúrbios do Crescimento", peso_prova: 6, frequencia_prova: 55, score: 21.5, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Câncer de Pulmão", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Apneia Obstrutiva do Sono", peso_prova: 6, frequencia_prova: 50, score: 20, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Demências", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Neuropatias Periféricas", peso_prova: 6, frequencia_prova: 55, score: 21.5, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Glomerulonefrites", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Colelitíase e Complicações", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Doença Celíaca", peso_prova: 6, frequencia_prova: 55, score: 21.5, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Leptospirose", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Febre Amarela", peso_prova: 6, frequencia_prova: 55, score: 21.5, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Anemia Hemolítica", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Vasculites", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Transtornos Alimentares", peso_prova: 6, frequencia_prova: 50, score: 20, prioridade: 3 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Infecções Cirúrgicas", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Antibioticoprofilaxia", peso_prova: 7, frequencia_prova: 70, score: 26, prioridade: 2 },
    { area: "Cirurgia", subarea: "Proctologia", tema: "Fissura Anal", peso_prova: 6, frequencia_prova: 55, score: 21.5, prioridade: 3 },
    { area: "Cirurgia", subarea: "Urologia", tema: "Câncer de Bexiga", peso_prova: 6, frequencia_prova: 55, score: 21.5, prioridade: 3 },
    { area: "Cirurgia", subarea: "Vascular", tema: "Insuficiência Venosa Crônica", peso_prova: 6, frequencia_prova: 55, score: 21.5, prioridade: 3 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Prematuridade", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Distúrbios Respiratórios Neonatais", peso_prova: 9, frequencia_prova: 80, score: 31, prioridade: 2 },
    { area: "Pediatria", subarea: "Geral", tema: "Crescimento e Desenvolvimento", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Geral", tema: "Parasitoses Intestinais", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia", tema: "Rotura Prematura de Membranas", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia", tema: "Restrição de Crescimento Intrauterino", peso_prova: 9, frequencia_prova: 80, score: 31, prioridade: 2 },
    { area: "Preventiva", subarea: "Saúde Pública", tema: "Estratégia Saúde da Família", peso_prova: 9, frequencia_prova: 90, score: 33.3, prioridade: 2 },
    { area: "Preventiva", subarea: "Epidemiologia", tema: "Sensibilidade e Especificidade", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Doenças do Pericárdio", peso_prova: 6, frequencia_prova: 55, score: 21.5, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Síncope", peso_prova: 6, frequencia_prova: 50, score: 20, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Hipercalcemia e Hipocalcemia", peso_prova: 6, frequencia_prova: 55, score: 21.5, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Distúrbios da Paratireoide", peso_prova: 5, frequencia_prova: 45, score: 18.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Bronquiectasias", peso_prova: 6, frequencia_prova: 50, score: 20, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Pneumotórax", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Síndromes Cerebelares", peso_prova: 5, frequencia_prova: 45, score: 18.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Miopatias", peso_prova: 5, frequencia_prova: 45, score: 18.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Doença Policística Renal", peso_prova: 5, frequencia_prova: 45, score: 18.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Síndrome do Intestino Irritável", peso_prova: 6, frequencia_prova: 50, score: 20, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Constipação Crônica", peso_prova: 5, frequencia_prova: 45, score: 18.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Dengue", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Zika e Chikungunya", peso_prova: 6, frequencia_prova: 55, score: 21.5, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Leucemias", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Síndrome de Sjögren", peso_prova: 5, frequencia_prova: 45, score: 18.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Transtornos de Personalidade", peso_prova: 6, frequencia_prova: 50, score: 20, prioridade: 3 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Queimaduras", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 3 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Choque no Trauma", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 3 },
    { area: "Cirurgia", subarea: "Proctologia", tema: "Abscesso Anorretal", peso_prova: 6, frequencia_prova: 50, score: 20, prioridade: 3 },
    { area: "Cirurgia", subarea: "Urologia", tema: "Infecção Urinária Complicada", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Cirurgia", subarea: "Vascular", tema: "Aneurisma de Aorta Abdominal", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Pediatria", subarea: "Geral", tema: "Desidratação", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Geral", tema: "Aleitamento Materno", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 3 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Icterícia Neonatal", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia", tema: "Placenta Prévia", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia", tema: "Descolamento Prematuro de Placenta", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Preventiva", subarea: "Epidemiologia", tema: "Valor P e Intervalo de Confiança", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 3 },
    { area: "Preventiva", subarea: "Saúde Pública", tema: "Vigilância Epidemiológica", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Doença de Chagas (forma cardíaca)", peso_prova: 6, frequencia_prova: 55, score: 21.5, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Cardiopatia Congênita no Adulto", peso_prova: 5, frequencia_prova: 45, score: 18.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Cetoacidose Diabética", peso_prova: 9, frequencia_prova: 80, score: 31, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Estado Hiperosmolar Hiperglicêmico", peso_prova: 8, frequencia_prova: 70, score: 26, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Aspergilose", peso_prova: 5, frequencia_prova: 45, score: 18.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Doenças Ocupacionais Pulmonares", peso_prova: 5, frequencia_prova: 45, score: 18.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Síndrome de Guillain-Barré", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Miastenia Gravis", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Nefropatia Diabética", peso_prova: 8, frequencia_prova: 70, score: 26, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Nefrite Lúpica", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Hepatites Virais", peso_prova: 9, frequencia_prova: 80, score: 31, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Colangite e Colestase", peso_prova: 6, frequencia_prova: 55, score: 21.5, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Malária", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Parasitoses Sistêmicas", peso_prova: 5, frequencia_prova: 45, score: 18.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Linfomas", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Polimialgia Reumática", peso_prova: 5, frequencia_prova: 45, score: 18.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Abuso de Substâncias", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 3 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Câncer Gástrico", peso_prova: 7, frequencia_prova: 60, score: 23, prioridade: 3 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Câncer Colorretal", peso_prova: 8, frequencia_prova: 70, score: 26, prioridade: 2 },
    { area: "Cirurgia", subarea: "Proctologia", tema: "Fístula Anal", peso_prova: 6, frequencia_prova: 55, score: 21.5, prioridade: 3 },
    { area: "Cirurgia", subarea: "Urologia", tema: "Torção Testicular", peso_prova: 8, frequencia_prova: 70, score: 26, prioridade: 2 },
    { area: "Cirurgia", subarea: "Vascular", tema: "Dissecção de Aorta", peso_prova: 8, frequencia_prova: 70, score: 26, prioridade: 2 },
    { area: "Pediatria", subarea: "Geral", tema: "Crises Convulsivas na Infância", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Geral", tema: "Obesidade Infantil", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 3 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Sepse Neonatal", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Ginecologia", tema: "Mioma Uterino", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Ginecologia", tema: "Câncer de Colo do Útero", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 2 },
    { area: "Preventiva", subarea: "Saúde Pública", tema: "Promoção da Saúde", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 3 },
    { area: "Preventiva", subarea: "Epidemiologia", tema: "Curvas Epidêmicas", peso_prova: 6, frequencia_prova: 55, score: 21.5, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Tumores Cardíacos", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Doença de Kawasaki (repercussões cardíacas)", peso_prova: 5, frequencia_prova: 40, score: 17, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Síndromes Genéticas Endócrinas", peso_prova: 4, frequencia_prova: 35, score: 15.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Tumores Endócrinos", peso_prova: 5, frequencia_prova: 40, score: 17, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Doenças Pleuropulmonares Raras", peso_prova: 4, frequencia_prova: 35, score: 15.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Doenças Desmielinizantes Raras", peso_prova: 4, frequencia_prova: 35, score: 15.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Doenças Tubulointersticiais", peso_prova: 5, frequencia_prova: 40, score: 17, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Doenças Hepáticas Raras", peso_prova: 4, frequencia_prova: 35, score: 15.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Doenças Tropicais Raras", peso_prova: 4, frequencia_prova: 35, score: 15.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Doenças Mieloproliferativas Raras", peso_prova: 4, frequencia_prova: 35, score: 15.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Doenças Autoimunes Raras", peso_prova: 4, frequencia_prova: 35, score: 15.5, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Transtornos Dissociativos", peso_prova: 5, frequencia_prova: 40, score: 17, prioridade: 4 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Tumores Raros do Trato Digestivo", peso_prova: 4, frequencia_prova: 35, score: 15.5, prioridade: 4 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Complicações Pós-operatórias Raras", peso_prova: 5, frequencia_prova: 40, score: 17, prioridade: 4 },
    { area: "Cirurgia", subarea: "Proctologia", tema: "Doenças Anorretais Raras", peso_prova: 4, frequencia_prova: 35, score: 15.5, prioridade: 4 },
    { area: "Cirurgia", subarea: "Urologia", tema: "Tumores Testiculares Raros", peso_prova: 4, frequencia_prova: 35, score: 15.5, prioridade: 4 },
    { area: "Cirurgia", subarea: "Vascular", tema: "Doenças Vasculares Raras", peso_prova: 4, frequencia_prova: 35, score: 15.5, prioridade: 4 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Doenças Metabólicas Neonatais Raras", peso_prova: 4, frequencia_prova: 35, score: 15.5, prioridade: 4 },
    { area: "Pediatria", subarea: "Geral", tema: "Doenças Genéticas Raras", peso_prova: 4, frequencia_prova: 35, score: 15.5, prioridade: 4 },
    { area: "Pediatria", subarea: "Geral", tema: "Erros Inatos do Metabolismo", peso_prova: 5, frequencia_prova: 40, score: 17, prioridade: 4 },
    { area: "Ginecologia e Obstetrícia", subarea: "Ginecologia", tema: "Tumores Ginecológicos Raros", peso_prova: 4, frequencia_prova: 35, score: 15.5, prioridade: 4 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia", tema: "Complicações Obstétricas Raras", peso_prova: 4, frequencia_prova: 35, score: 15.5, prioridade: 4 },
    { area: "Preventiva", subarea: "Epidemiologia", tema: "Modelos Estatísticos Avançados", peso_prova: 4, frequencia_prova: 35, score: 15.5, prioridade: 4 },
    { area: "Preventiva", subarea: "Saúde Pública", tema: "Políticas Públicas Específicas", peso_prova: 4, frequencia_prova: 35, score: 15.5, prioridade: 4 },
    { area: "Preventiva", subarea: "Saúde Pública", tema: "Sistemas Internacionais de Saúde", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Doenças do Nó Sinusal", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Doenças do Sistema de Condução", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Hipogonadismo", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Síndrome dos Ovários Policísticos (visão clínica)", peso_prova: 5, frequencia_prova: 40, score: 17, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Doenças Restritivas Raras", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Doenças da Pleura Raras", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Doenças do Neurônio Motor", peso_prova: 5, frequencia_prova: 40, score: 17, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Ataxias Hereditárias", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Doenças Glomerulares Raras", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Doenças do Intestino Delgado Raras", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Distúrbios da Motilidade Esofágica", peso_prova: 5, frequencia_prova: 40, score: 17, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Infecções Fúngicas Sistêmicas Raras", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Doenças Hematológicas Raras", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Síndromes Paraneoplásicas Reumatológicas", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Transtornos Somatoformes", peso_prova: 5, frequencia_prova: 40, score: 17, prioridade: 4 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Tumores Neuroendócrinos Digestivos", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Doenças Raras do Esôfago", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Cirurgia", subarea: "Proctologia", tema: "Tumores Anorretais Raros", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Cirurgia", subarea: "Urologia", tema: "Doenças Congênitas Urológicas no Adulto", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Cirurgia", subarea: "Vascular", tema: "Vasculites Cirúrgicas Raras", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Síndromes Genéticas Neonatais", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Pediatria", subarea: "Geral", tema: "Doenças Autoimunes Pediátricas Raras", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Pediatria", subarea: "Geral", tema: "Doenças Endócrinas Pediátricas Raras", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Ginecologia e Obstetrícia", subarea: "Ginecologia", tema: "Síndromes Endócrinas Ginecológicas Raras", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia", tema: "Doenças Raras na Gestação", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Preventiva", subarea: "Epidemiologia", tema: "Métodos Avançados de Análise Epidemiológica", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Preventiva", subarea: "Saúde Pública", tema: "Gestão Avançada em Saúde Pública", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },
    { area: "Preventiva", subarea: "Saúde Pública", tema: "Economia da Saúde", peso_prova: 4, frequencia_prova: 30, score: 14, prioridade: 4 },

    // ═══════════════════════════════════════════════════════════════
    // EXPANSÃO — CIRURGIA (novas subespecialidades + adensamento)
    // ═══════════════════════════════════════════════════════════════
// ════════════════════════════════════════════════
    // ADENSAMENTO — CIRURGIA GERAL (existente)
    // ════════════════════════════════════════════════
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Pancreatite Crônica", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Câncer de Pâncreas", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Hipertensão Portal e Varizes Esofágicas", peso_prova: 9, frequencia_prova: 84, score: 32.4, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Coledocolitíase e Colangite", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Esôfago de Barrett e Adenocarcinoma de Esôfago", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Carcinoma Escamocelular de Esôfago", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Hérnia de Hiato e Doença do Refluxo Cirúrgico", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Acalasia", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Síndrome de Boerhaave (Perfuração Esofágica Espontânea)", peso_prova: 8, frequencia_prova: 72, score: 27.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Isquemia Mesentérica Aguda", peso_prova: 9, frequencia_prova: 84, score: 32.4, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Fístulas Enterocutâneas", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Laparoscopia Diagnóstica e Terapêutica — Princípios", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Complicações Pós-operatórias Gerais", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Nutrição em Cirurgia — Indicações de TNE e TNP", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Síndrome Compartimental Abdominal", peso_prova: 8, frequencia_prova: 72, score: 27.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Laparotomia Exploradora — Controle de Danos", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Volvo de Sigmóide e Ceco", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Colostomia e Ileostomia — Indicações e Cuidados", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Esplenectomia — Indicações e Profilaxia Pós-operatória", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Geral", tema: "Doença de Crohn Cirúrgica", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },

    // ════════════════════════════════════════════════
    // ADENSAMENTO — TRAUMA (existente)
    // ════════════════════════════════════════════════
    { area: "Cirurgia", subarea: "Trauma", tema: "Trauma Abdominal — Fechado vs Penetrante", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Cirurgia", subarea: "Trauma", tema: "Trauma Torácico — Pneumotórax Hipertensivo e Hemotórax", peso_prova: 10, frequencia_prova: 93, score: 36.1, prioridade: 1 },
    { area: "Cirurgia", subarea: "Trauma", tema: "Trauma de Bacia — Classificação e Controle do Sangramento", peso_prova: 9, frequencia_prova: 84, score: 32.4, prioridade: 1 },
    { area: "Cirurgia", subarea: "Trauma", tema: "Trauma Hepático e Esplênico — Graus e Conduta", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Cirurgia", subarea: "Trauma", tema: "Lesão Duodenal e Pancreática no Trauma", peso_prova: 8, frequencia_prova: 72, score: 27.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Trauma", tema: "Trauma Vascular Periférico", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Cirurgia", subarea: "Trauma", tema: "Síndrome de Resposta Inflamatória Sistêmica (SRIS) no Trauma", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Trauma", tema: "Tríade da Morte no Trauma (Acidose, Hipotermia, Coagulopatia)", peso_prova: 9, frequencia_prova: 84, score: 32.4, prioridade: 1 },
    { area: "Cirurgia", subarea: "Trauma", tema: "FAST e eFAST no Trauma", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Cirurgia", subarea: "Trauma", tema: "Trauma Ocular", peso_prova: 6, frequencia_prova: 55, score: 21.0, prioridade: 3 },

    // ════════════════════════════════════════════════
    // ADENSAMENTO — VASCULAR (existente)
    // ════════════════════════════════════════════════
    { area: "Cirurgia", subarea: "Vascular", tema: "Isquemia Crítica de Membro — Tratamento Cirúrgico", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Vascular", tema: "Úlcera de Membro Inferior — Arterial, Venosa e Neuropática", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Vascular", tema: "Endovasculares — Conceitos de EVAR e Stent", peso_prova: 7, frequencia_prova: 62, score: 23.5, prioridade: 3 },
    { area: "Cirurgia", subarea: "Vascular", tema: "Acidente Vascular Mesentérico Venoso", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },
    { area: "Cirurgia", subarea: "Vascular", tema: "Linfedema — Diagnóstico e Tratamento Conservador", peso_prova: 6, frequencia_prova: 55, score: 21.0, prioridade: 3 },

    // ════════════════════════════════════════════════
    // ADENSAMENTO — UROLOGIA (existente)
    // ════════════════════════════════════════════════
    { area: "Cirurgia", subarea: "Urologia", tema: "Trauma Renal — Estadiamento e Conduta", peso_prova: 8, frequencia_prova: 72, score: 27.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Urologia", tema: "Câncer de Rim (Carcinoma de Células Renais)", peso_prova: 8, frequencia_prova: 72, score: 27.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Urologia", tema: "Priapismo — Classificação e Urgência Urológica", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Urologia", tema: "Fimose e Parafimose", peso_prova: 7, frequencia_prova: 66, score: 25.0, prioridade: 2 },
    { area: "Cirurgia", subarea: "Urologia", tema: "Epididimite e Orquite", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Urologia", tema: "Bexiga Neurogênica", peso_prova: 6, frequencia_prova: 55, score: 21.0, prioridade: 3 },
    { area: "Cirurgia", subarea: "Urologia", tema: "Incontinência Urinária Masculina", peso_prova: 6, frequencia_prova: 52, score: 19.8, prioridade: 3 },

    // ════════════════════════════════════════════════
    // ADENSAMENTO — PROCTOLOGIA (existente)
    // ════════════════════════════════════════════════
    { area: "Cirurgia", subarea: "Proctologia", tema: "Câncer de Reto — Estadiamento e Tratamento Multimodal", peso_prova: 9, frequencia_prova: 84, score: 32.4, prioridade: 1 },
    { area: "Cirurgia", subarea: "Proctologia", tema: "Retocolite Ulcerativa Cirúrgica", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Cirurgia", subarea: "Proctologia", tema: "Prolapso Retal", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },
    { area: "Cirurgia", subarea: "Proctologia", tema: "Pilonidal (Cisto Sacrococcígeo)", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Proctologia", tema: "Incontinência Fecal", peso_prova: 6, frequencia_prova: 52, score: 19.8, prioridade: 3 },

    // ════════════════════════════════════════════════
    // NOVA SUBÁREA — ORTOPEDIA E TRAUMA
    // ════════════════════════════════════════════════
    { area: "Cirurgia", subarea: "Ortopedia e Trauma", tema: "Fratura de Fêmur Proximal (Colo e Trocantérica)", peso_prova: 10, frequencia_prova: 93, score: 36.1, prioridade: 1 },
    { area: "Cirurgia", subarea: "Ortopedia e Trauma", tema: "Fratura de Coluna — ASIA e Imobilização", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Cirurgia", subarea: "Ortopedia e Trauma", tema: "Fratura de Quadril no Idoso — Urgência e Reabilitação", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Ortopedia e Trauma", tema: "Trauma de Joelho — Ligamentos e Meniscos", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Ortopedia e Trauma", tema: "Síndrome Compartimental de Membros", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Ortopedia e Trauma", tema: "Fratura Exposta — Classificação de Gustilo e Manejo", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Ortopedia e Trauma", tema: "Osteomielite — Aguda e Crônica", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Ortopedia e Trauma", tema: "Artrite Séptica", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Ortopedia e Trauma", tema: "Luxação de Quadril — Redução e Complicações", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Cirurgia", subarea: "Ortopedia e Trauma", tema: "Fratura de Punho (Colles e Smith)", peso_prova: 7, frequencia_prova: 66, score: 25.0, prioridade: 2 },
    { area: "Cirurgia", subarea: "Ortopedia e Trauma", tema: "Tendinite e Síndrome do Manguito Rotador", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Ortopedia e Trauma", tema: "Epifisiólise — Classificação de Salter-Harris", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Ortopedia e Trauma", tema: "Tumor Ósseo — Diagnóstico Diferencial Primário vs Metastático", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },
    { area: "Cirurgia", subarea: "Ortopedia e Trauma", tema: "Osteoartrose — Tratamento Clínico e Indicação Cirúrgica", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Ortopedia e Trauma", tema: "Doença do Disco Intervertebral — Hérnia e Estenose de Canal", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Ortopedia e Trauma", tema: "Displasia do Desenvolvimento do Quadril (DDQ)", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },

    // ════════════════════════════════════════════════
    // NOVA SUBÁREA — NEUROCIRURGIA BÁSICA
    // ════════════════════════════════════════════════
    { area: "Cirurgia", subarea: "Neurocirurgia", tema: "Traumatismo Cranioencefálico (TCE) — Classificação e Manejo", peso_prova: 10, frequencia_prova: 93, score: 36.1, prioridade: 1 },
    { area: "Cirurgia", subarea: "Neurocirurgia", tema: "Hematoma Subdural Agudo e Crônico", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Cirurgia", subarea: "Neurocirurgia", tema: "Hematoma Epidural — Intervalo Lúcido e Urgência Cirúrgica", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Cirurgia", subarea: "Neurocirurgia", tema: "Hemorragia Subaracnóidea (HSA) — Aneurisma Roto", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Neurocirurgia", tema: "Hipertensão Intracraniana — Monitorização e Tratamento", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Neurocirurgia", tema: "Hidrocefalia no Adulto — DVP e DVE", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Neurocirurgia", tema: "Tumores do SNC — Diagnóstico Diferencial e Tipos", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Neurocirurgia", tema: "Abscesso Cerebral", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Neurocirurgia", tema: "Trauma Raquimedular — Imobilização e Esteroides", peso_prova: 9, frequencia_prova: 84, score: 32.4, prioridade: 1 },
    { area: "Cirurgia", subarea: "Neurocirurgia", tema: "Morte Encefálica — Critérios e Protocolo", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Cirurgia", subarea: "Neurocirurgia", tema: "Malformação Arteriovenosa (MAV) Cerebral", peso_prova: 6, frequencia_prova: 55, score: 21.0, prioridade: 3 },

    // ════════════════════════════════════════════════
    // NOVA SUBÁREA — CIRURGIA TORÁCICA
    // ════════════════════════════════════════════════
    { area: "Cirurgia", subarea: "Cirurgia Torácica", tema: "Pneumotórax Espontâneo Primário e Secundário", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Torácica", tema: "Empiema Pleural — Estágios e Tratamento Cirúrgico", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Torácica", tema: "Câncer de Pulmão — Estadiamento e Ressecabilidade", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Torácica", tema: "Tamponamento Cardíaco — Pericardiocentese", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Torácica", tema: "Trauma Torácico — Tórax Instável e Contusão Pulmonar", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Torácica", tema: "Lesão Diafragmática no Trauma", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Torácica", tema: "Mediastinite Aguda", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Torácica", tema: "Tumores do Mediastino — Diagnóstico Diferencial por Compartimento", peso_prova: 8, frequencia_prova: 72, score: 27.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Torácica", tema: "Toracotomia de Reanimação — Indicações", peso_prova: 7, frequencia_prova: 62, score: 23.5, prioridade: 3 },

    // ════════════════════════════════════════════════
    // NOVA SUBÁREA — CIRURGIA DE CABEÇA E PESCOÇO
    // ════════════════════════════════════════════════
    { area: "Cirurgia", subarea: "Cirurgia de Cabeça e Pescoço", tema: "Nódulo de Tireoide — BETHESDA e Indicação Cirúrgica", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia de Cabeça e Pescoço", tema: "Carcinoma Diferenciado da Tireoide — Papilífero e Folicular", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia de Cabeça e Pescoço", tema: "Carcinoma Medular de Tireoide e NEM 2", peso_prova: 8, frequencia_prova: 72, score: 27.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia de Cabeça e Pescoço", tema: "Hiperparatireoidismo Primário — Indicação Cirúrgica", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia de Cabeça e Pescoço", tema: "Carcinoma Espinocelular de Cabeça e Pescoço", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia de Cabeça e Pescoço", tema: "Linfadenopatia Cervical — Diagnóstico Diferencial", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia de Cabeça e Pescoço", tema: "Glândulas Salivares — Tumores e Cálculos", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia de Cabeça e Pescoço", tema: "Esvaziamento Cervical — Tipos e Indicações", peso_prova: 7, frequencia_prova: 62, score: 23.5, prioridade: 3 },
    { area: "Cirurgia", subarea: "Cirurgia de Cabeça e Pescoço", tema: "Traqueostomia — Indicações e Complicações", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia de Cabeça e Pescoço", tema: "Corpo Estranho em Vias Aéreas Superiores — Manobra de Heimlich", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },

    // ════════════════════════════════════════════════
    // NOVA SUBÁREA — CIRURGIA PEDIÁTRICA
    // ════════════════════════════════════════════════
    { area: "Cirurgia", subarea: "Cirurgia Pediátrica", tema: "Hérnia Inguinal na Criança — Diferenças com o Adulto", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Pediátrica", tema: "Apendicite na Criança — Particularidades Diagnósticas", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Pediátrica", tema: "Onfalocele e Gastrosquise", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Pediátrica", tema: "Atresia Intestinal — Diagnóstico Pré-natal e Pós-natal", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Pediátrica", tema: "Ânus Imperfurado — Tipos e Conduta Imediata", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Pediátrica", tema: "Torção Testicular na Criança", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Pediátrica", tema: "Criptorquidia — Diagnóstico e Orquiopexia", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Pediátrica", tema: "Tumor de Wilms (Nefroblastoma)", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Pediátrica", tema: "Neuroblastoma", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Pediátrica", tema: "Queimaduras na Criança — Regra dos 9 Adaptada", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Pediátrica", tema: "Estenose de Uretra e Hipospádia", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },

    // ════════════════════════════════════════════════
    // NOVA SUBÁREA — CIRURGIA PLÁSTICA E QUEIMADOS
    // ════════════════════════════════════════════════
    { area: "Cirurgia", subarea: "Cirurgia Plástica e Queimados", tema: "Queimaduras — Classificação por Profundidade e SCQ", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Plástica e Queimados", tema: "Ressuscitação Volêmica no Queimado (Fórmula de Parkland)", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Plástica e Queimados", tema: "Queimadura por Inalação — Diagnóstico e Manejo", peso_prova: 9, frequencia_prova: 84, score: 32.4, prioridade: 1 },
    { area: "Cirurgia", subarea: "Cirurgia Plástica e Queimados", tema: "Escarotomia e Fasciotomia no Queimado", peso_prova: 7, frequencia_prova: 62, score: 23.5, prioridade: 3 },
    { area: "Cirurgia", subarea: "Cirurgia Plástica e Queimados", tema: "Enxertos de Pele — Tipos e Indicações", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Plástica e Queimados", tema: "Cicatrização de Feridas — Fases e Fatores", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Cirurgia Plástica e Queimados", tema: "Retalhos — Princípios Básicos e Classificação", peso_prova: 6, frequencia_prova: 54, score: 20.5, prioridade: 3 },
    { area: "Cirurgia", subarea: "Cirurgia Plástica e Queimados", tema: "Úlcera por Pressão — Estadiamento e Prevenção", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },

    // ════════════════════════════════════════════════
    // NOVA SUBÁREA — ANESTESIOLOGIA E PERIOPERATÓRIO
    // (alta frequência nas provas, completamente ausente)
    // ════════════════════════════════════════════════
    { area: "Cirurgia", subarea: "Anestesiologia e Perioperatório", tema: "Avaliação Pré-Operatória — Risco Cirúrgico e ASA", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Anestesiologia e Perioperatório", tema: "Anestesia Geral — Indução, Manutenção e Recuperação", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Anestesiologia e Perioperatório", tema: "Anestesia Regional — Raqui, Peridural e Bloqueios", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Anestesiologia e Perioperatório", tema: "Profilaxia de Tromboembolismo no Pós-operatório", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Cirurgia", subarea: "Anestesiologia e Perioperatório", tema: "Hipertermia Maligna — Diagnóstico e Dantrolene", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Anestesiologia e Perioperatório", tema: "Manejo da Via Aérea Difícil — Intubação e Cricotireoidostomia", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Cirurgia", subarea: "Anestesiologia e Perioperatório", tema: "Bloqueio Neuromuscular — Agentes e Reversão", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },
    { area: "Cirurgia", subarea: "Anestesiologia e Perioperatório", tema: "Manejo da Dor Pós-operatória — Analgesia Multimodal", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Cirurgia", subarea: "Anestesiologia e Perioperatório", tema: "Profilaxia Antibiótica Cirúrgica — Indicações e Timing", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },

    // ═══════════════════════════════════════════════════════════════
    // EXPANSÃO — CLÍNICA MÉDICA (adensamento + novas subespecialidades)
    // ═══════════════════════════════════════════════════════════════
// ════════════════════════════════════════════════
    // CARDIOLOGIA — adensamento
    // ════════════════════════════════════════════════
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Fibrilação Atrial — Controle de Ritmo vs Frequência e Anticoagulação", peso_prova: 10, frequencia_prova: 93, score: 36.1, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Flutter Atrial — Diagnóstico e Ablação", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Taquicardia Supraventricular Paroxística — Manobras e Adenosina", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Taquicardia Ventricular e Fibrilação Ventricular — Manejo", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Bloqueios Atrioventriculares — Graus e Indicação de Marca-passo", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Crise Hipertensiva — Urgência vs Emergência Hipertensiva", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Estenose Aórtica — Gradiente e Indicação Cirúrgica", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Insuficiência Mitral Aguda e Crônica", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Estenose Mitral — Área Valvar e Comissurotomia", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Insuficiência Aórtica — Mecanismo e Indicação Cirúrgica", peso_prova: 8, frequencia_prova: 72, score: 27.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Choque Cardiogênico — Diagnóstico e Suporte", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Edema Agudo de Pulmão Cardiogênico — Manejo", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Interpretação do ECG — Sistemática Básica", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Marca-passo Cardíaco — Indicações e Tipos", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Miocardiopatia Hipertrófica Obstrutiva", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Cor Pulmonale — Diagnóstico e Tratamento", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Cardiologia", tema: "Prolapso da Válvula Mitral", peso_prova: 6, frequencia_prova: 55, score: 21.0, prioridade: 3 },

    // ════════════════════════════════════════════════
    // DERMATOLOGIA — subárea nova (completamente ausente)
    // ════════════════════════════════════════════════
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Hanseníase — Classificação, Diagnóstico e Tratamento (PQT)", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Psoríase — Formas Clínicas e Tratamento", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Dermatite Atópica", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Dermatite de Contato — Irritativa vs Alérgica", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Urticária e Angioedema — Diagnóstico e Manejo", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Melanoma — ABCDE e Estadiamento", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Carcinoma Basocelular e Espinocelular", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Acne — Classificação e Tratamento", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Tinhas — Tinea Capitis, Corporis, Unguium e Pedis", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Pitiríase Versicolor", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Escabiose (Sarna) e Pediculose", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Impetigo e Ectima", peso_prova: 7, frequencia_prova: 66, score: 25.0, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Celulite e Erisipela", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Fasciíte Necrosante", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Herpes Zoster — Clínica e Complicações (Neuralgia Pós-herpética)", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Pênfigo Vulgar e Penfigóide Bolhoso", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Síndrome de Stevens-Johnson e Necrólise Epidérmica Tóxica", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Eritema Nodoso e Eritema Multiforme", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Alopecia — Androgenética, Areata e Eflúvio", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Lúpus Eritematoso Cutâneo", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Dermatologia", tema: "Reações Adversas Cutâneas a Medicamentos", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },

    // ════════════════════════════════════════════════
    // ENDOCRINOLOGIA — adensamento
    // ════════════════════════════════════════════════
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Cetoacidose Diabética — Diagnóstico e Protocolo de Tratamento", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Estado Hiperosmolar Hiperglicêmico — Diferenças da CAD", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Pé Diabético — Classificação de Wagner e Manejo", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Hipotireoidismo — Diagnóstico, Tratamento e Coma Mixedematoso", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Hipertireoidismo — Crise Tireotóxica e Tratamento", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Tireoidite de Hashimoto e Tireoidite Subaguda", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Síndrome de Cushing — Diagnóstico Laboratorial e Etiologia", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Insuficiência Adrenal e Crise Adrenal — Tratamento de Emergência", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Feocromocitoma — Diagnóstico e Preparo Pré-operatório", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Acromegalia — Diagnóstico e Tratamento", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Diabetes Insipidus — Central vs Nefrogênico", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "SIADH — Diagnóstico Diferencial de Hiponatremia", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Hiperaldosteronismo Primário (Síndrome de Conn)", peso_prova: 8, frequencia_prova: 72, score: 27.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Osteoporose — Diagnóstico, DXA e Tratamento", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Endocrinologia", tema: "Neoplasia Endócrina Múltipla (NEM 1 e NEM 2)", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },

    // ════════════════════════════════════════════════
    // GASTROENTEROLOGIA — adensamento
    // ════════════════════════════════════════════════
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Hemorragia Digestiva Baixa — Diagnóstico e Conduta", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Úlcera Péptica — H. pylori, AINE e Complicações", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Gastrite Aguda e Crônica — Etiologias", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Pancreatite Crônica — Diagnóstico e Complicações", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Ascite — Investigação e SAAG", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Peritonite Bacteriana Espontânea (PBE)", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Síndrome Hepatorrenal", peso_prova: 9, frequencia_prova: 84, score: 32.4, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Encefalopatia Hepática — Graus e Tratamento", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Carcinoma Hepatocelular (CHC) — Rastreamento e Tratamento", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Constipação Crônica — Diagnóstico Diferencial e Manejo", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Megacólon Tóxico", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Colite Pseudomembranosa (C. difficile)", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Esteatose Hepática Não Alcoólica (NASH/NAFLD)", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Doença de Wilson e Hemocromatose", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Gastroenterologia", tema: "Colangite Biliar Primária e Colangite Esclerosante Primária", peso_prova: 7, frequencia_prova: 62, score: 23.5, prioridade: 3 },

    // ════════════════════════════════════════════════
    // HEMATOLOGIA — adensamento
    // ════════════════════════════════════════════════
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Anemia Ferropriva — Diagnóstico Laboratorial e Tratamento", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Anemia Megaloblástica — B12 vs Folato", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Anemia de Doença Crônica", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Doença Falciforme no Adulto — Crise Álgica e Complicações", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Leucemia Mieloide Aguda (LMA)", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Leucemia Mieloide Crônica (LMC) — Philadelphia e Imatinibe", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Leucemia Linfoide Crônica (LLC)", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Linfoma de Hodgkin — Célula de Reed-Sternberg e Estadiamento", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Linfoma Não Hodgkin — Classificação e Tratamento", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Mieloma Múltiplo — Critérios CRAB e Tratamento", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Trombocitopenia Induzida por Heparina (TIH)", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "CIVD — Diagnóstico e Tratamento", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Púrpura Trombocitopênica Imune (PTI) no Adulto", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Policitemia Vera — Diagnóstico e Flebotomia", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Anticoagulantes — Heparina, Warfarina e Novos Anticoagulantes", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Hematologia", tema: "Hemofilia A e B — Diagnóstico e Reposição de Fatores", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },

    // ════════════════════════════════════════════════
    // HEPATOLOGIA — subárea nova (separada de Gastro)
    // ════════════════════════════════════════════════
    { area: "Clínica Médica", subarea: "Hepatologia", tema: "Hepatite A — Epidemiologia, Clínica e Prevenção", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Hepatologia", tema: "Hepatite B — Marcadores Sorológicos e Tratamento", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Hepatologia", tema: "Hepatite C — Diagnóstico, DAA e Cura", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Hepatologia", tema: "Hepatite E — Populações de Risco e Gestação", peso_prova: 6, frequencia_prova: 54, score: 20.5, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Hepatologia", tema: "Hepatite Alcoólica — Escore de Maddrey e Corticoide", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Hepatologia", tema: "Cirrose Hepática — Classificação Child-Pugh e MELD", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Hepatologia", tema: "Transplante Hepático — Indicações e Contraindicações", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Hepatologia", tema: "Hepatite Autoimune — Diagnóstico e Tratamento com Imunossupressores", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Hepatologia", tema: "Insuficiência Hepática Aguda Grave — Manejo", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },

    // ════════════════════════════════════════════════
    // INFECTOLOGIA — adensamento
    // ════════════════════════════════════════════════
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Meningite Bacteriana no Adulto — Antibioticoterapia Empírica", peso_prova: 10, frequencia_prova: 93, score: 36.1, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Meningite Viral (Asséptica) — Diagnóstico e Conduta", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Encefalite por Herpes Simplex — Aciclovir Empírico", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Infecções Relacionadas à Assistência à Saúde (IRAS)", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Pneumonia Hospitalar e Associada à Ventilação (PAV)", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Infecções por MRSA — Tratamento com Vancomicina", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Bactérias Multirresistentes — ESBL, KPC e Controle de Infecção", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Leishmaniose Visceral (Calazar) — Diagnóstico e Anfotericina B", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Leishmaniose Tegumentar Americana", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Doença de Chagas — Fase Aguda e Crônica", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Esquistossomose — Forma Hepatoesplênica e Tratamento", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Toxoplasmose no Imunossuprimido", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Pneumocistose (PCP) em HIV", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Criptococose — Meningite Criptocócica no HIV", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Histoplasmose Disseminada", peso_prova: 6, frequencia_prova: 55, score: 21.0, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Profilaxias no Paciente HIV — Primária e Secundária", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Síndrome Febril Prolongada — Investigação de FUO", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Febre Tifoide — Diagnóstico e Cloranfenicol vs Quinolonas", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Infectologia", tema: "Rickettsioses — Febre Maculosa Brasileira", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },

    // ════════════════════════════════════════════════
    // NEFROLOGIA — adensamento
    // ════════════════════════════════════════════════
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Hipercalemia — Tratamento Emergencial (ECG e Gluconato de Cálcio)", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Hiponatremia — Correto vs Hiper vs Hipotônica", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Hipocalcemia Grave — Tetania e Tratamento", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Acidose Metabólica — Ânion Gap e Diagnóstico Diferencial", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Terapia Renal Substitutiva — Hemodiálise vs Peritoneal", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Nefrolitíase — Tipos de Cálculo e Prevenção", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Nefrite Intersticial Aguda — Causas e Tratamento", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Transplante Renal — Critérios e Imunossupressão", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Nefropatia por Contraste — Prevenção e Fatores de Risco", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Nefrologia", tema: "Hiperfosfatemia e Hiperparatireoidismo Secundário na DRC", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },

    // ════════════════════════════════════════════════
    // OFTALMOLOGIA — subárea nova
    // ════════════════════════════════════════════════
    { area: "Clínica Médica", subarea: "Oftalmologia", tema: "Glaucoma Agudo de Ângulo Fechado — Urgência Oftalmológica", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Oftalmologia", tema: "Glaucoma Crônico de Ângulo Aberto — Rastreamento", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Oftalmologia", tema: "Retinopatia Diabética — Classificação e Laser", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Oftalmologia", tema: "Retinopatia Hipertensiva — Classificação de Keith-Wagener", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Oftalmologia", tema: "Catarata — Indicação Cirúrgica", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Oftalmologia", tema: "Oclusão de Artéria e Veia Central da Retina", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Oftalmologia", tema: "Conjuntivite — Bacteriana, Viral e Alérgica", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Oftalmologia", tema: "Uveíte — Causas Sistêmicas (Sarcoidose, Espondiloartrite)", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Oftalmologia", tema: "Descolamento de Retina — Sintomas de Alarme", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Oftalmologia", tema: "Olho Vermelho — Diagnóstico Diferencial e Conduta", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Oftalmologia", tema: "Neurite Óptica — Associação com Esclerose Múltipla", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Oftalmologia", tema: "Tracoma — Endemia e Tratamento com Azitromicina", peso_prova: 6, frequencia_prova: 55, score: 21.0, prioridade: 3 },

    // ════════════════════════════════════════════════
    // OTORRINOLARINGOLOGIA — subárea nova
    // ════════════════════════════════════════════════
    { area: "Clínica Médica", subarea: "Otorrinolaringologia", tema: "Sinusite Aguda — Critérios de Antibioticoterapia", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Otorrinolaringologia", tema: "Amigdalite e Faringite — Score de Centor e Streptococo", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Otorrinolaringologia", tema: "Otite Média Aguda — Etiologia e Tratamento", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Otorrinolaringologia", tema: "Otite Externa — Pseudomonas e Otite Maligna no Diabético", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Otorrinolaringologia", tema: "Epistaxe — Anterior vs Posterior e Manejo", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Otorrinolaringologia", tema: "Vertigem — VPPB vs Central vs Neurite Vestibular", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Otorrinolaringologia", tema: "Doença de Ménière — Tríade e Tratamento", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Otorrinolaringologia", tema: "Surdez Súbita — Urgência e Corticoide", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Otorrinolaringologia", tema: "Hipoacusia — Condutiva vs Neurossensorial", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Otorrinolaringologia", tema: "Câncer de Laringe — Fatores de Risco e Rouquidão Persistente", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Otorrinolaringologia", tema: "Abscesso Periamigdaliano e Retrofaríngeo", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Otorrinolaringologia", tema: "Rinite Alérgica — Diagnóstico e Tratamento Escalonado", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },

    // ════════════════════════════════════════════════
    // PNEUMOLOGIA — adensamento
    // ════════════════════════════════════════════════
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Asma Grave Aguda — Manejo na Emergência", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Exacerbação Aguda de DPOC — Critérios de Internação e VNI", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Síndrome do Desconforto Respiratório Agudo (SDRA) — Critérios de Berlin", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Ventilação Mecânica — Modos, Parâmetros e Desmame", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Ventilação Não Invasiva (VNI/BIPAP/CPAP) — Indicações", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Hemoptise — Investigação e Embolização", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Nódulo Pulmonar Solitário — Conduta e Fleischner", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Sarcoidose — Manifestações Pulmonares e Extrapulmonares", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Pneumonia por Pneumocystis jirovecii (PCP)", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Hipertensão Pulmonar — Classificação e Tratamento", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Tosse Crônica — Diagnóstico Diferencial e Abordagem", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Pneumologia", tema: "Pneumonia de Hipersensibilidade (Alveolite Alérgica Extrínseca)", peso_prova: 6, frequencia_prova: 54, score: 20.5, prioridade: 3 },

    // ════════════════════════════════════════════════
    // PSIQUIATRIA — adensamento
    // ════════════════════════════════════════════════
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Síndrome de Abstinência do Álcool — Delirium Tremens e Benzodiazepínicos", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Síndrome Serotoninérgica — Diagnóstico e Manejo", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Síndrome Neuroléptica Maligna — Diagnóstico e Dantrolene", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Transtorno do Estresse Pós-Traumático (TEPT)", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Transtorno Obsessivo-Compulsivo (TOC) — Diagnóstico e ISRS", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Suicídio — Fatores de Risco e Abordagem na APS", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Psicoses Agudas — Diagnóstico Diferencial e Antipsicóticos", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Intoxicação por Benzodiazepínico e Opioide — Flumazenil e Naloxona", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Demência — Alzheimer vs Vascular vs Lewy — Diagnóstico Diferencial", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Delirium — Diagnóstico, Prevenção e Tratamento", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Psiquiatria", tema: "Psicofármacos — ISRS, Antipsicóticos, Estabilizadores de Humor", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },

    // ════════════════════════════════════════════════
    // REUMATOLOGIA — adensamento
    // ════════════════════════════════════════════════
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Lúpus — Critérios ACR/EULAR, Manifestações e Tratamento", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Artrite Reumatoide — Critérios, DMARDs e Biológicos", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Espondilite Anquilosante — HLA-B27 e Tratamento", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Artrite Psoriásica — Manifestações e Diagnóstico", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Gota — Hiperuricemia, Crise Aguda e Alopurinol", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Pseudogota (Condrocalcinose) — Cristais de Pirofosfato", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Esclerodermia (Esclerose Sistêmica) — Forma Limitada vs Difusa", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Polimiosite e Dermatomiosite", peso_prova: 8, frequencia_prova: 72, score: 27.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Fibromialgia — Critérios Diagnósticos e Abordagem", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Artrite Séptica no Adulto — Diagnóstico e Drenagem", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Síndrome Antifosfolípide — Critérios e Anticoagulação", peso_prova: 9, frequencia_prova: 84, score: 32.4, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Osteoartrite — Tratamento Farmacológico e Não Farmacológico", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Vasculites de Grandes Vasos — Arterite de Takayasu e Células Gigantes", peso_prova: 8, frequencia_prova: 72, score: 27.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Reumatologia", tema: "Vasculites de Pequenos Vasos — ANCA (Granulomatose de Wegener)", peso_prova: 8, frequencia_prova: 72, score: 27.5, prioridade: 2 },

    // ════════════════════════════════════════════════
    // NEUROLOGIA — adensamento
    // ════════════════════════════════════════════════
    { area: "Clínica Médica", subarea: "Neurologia", tema: "AVC Isquêmico — Trombólise, Janela Terapêutica e Trombectomia", peso_prova: 10, frequencia_prova: 93, score: 36.1, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "AVC Hemorrágico — Intracerebral vs Subaracnóideo", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Ataque Isquêmico Transitório (AIT) — Escore ABCD2 e Urgência", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Status Epiléptico — Protocolo de Tratamento", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Enxaqueca — Tratamento Agudo e Profilático", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Cefaleia em Salvas — Diagnóstico e Oxigênio", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Cefaleia Subaracnóidea — Pior Cefaleia da Vida", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Doença de Parkinson — Critérios, Levodopa e Complicações", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Esclerose Lateral Amiotrófica (ELA)", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Neuropatia Diabética — Tipos e Tratamento da Dor Neuropática", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Síndrome do Túnel do Carpo — Diagnóstico e Conduta", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Coma — Escala de Glasgow e Diagnóstico Diferencial", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Hipertensão Intracraniana — Manejo Clínico e Posição da Cabeceira", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Neurologia", tema: "Esclerose Múltipla — Surto, Tratamento com Corticoide e DMDs", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },

    // ════════════════════════════════════════════════
    // ORTOPEDIA — temas de Clínica (interface com Reumat/Neuro)
    // ════════════════════════════════════════════════
    { area: "Clínica Médica", subarea: "Ortopedia Clínica", tema: "Lombalgia — Red Flags e Tratamento Conservador", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Ortopedia Clínica", tema: "Hérnia de Disco Lombar — L4-L5 e L5-S1, Dermátomos", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Ortopedia Clínica", tema: "Estenose do Canal Vertebral — Claudicação Neurogênica vs Vascular", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Ortopedia Clínica", tema: "Síndrome do Impacto do Ombro — Diagnóstico e Fisioterapia", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Ortopedia Clínica", tema: "Tendinite Patelar e Síndrome da Banda Iliotibial", peso_prova: 6, frequencia_prova: 54, score: 20.5, prioridade: 3 },
    { area: "Clínica Médica", subarea: "Ortopedia Clínica", tema: "Osteoporose — Fraturas por Fragilidade e Prevenção de Quedas", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Ortopedia Clínica", tema: "Artropatias Cristalinas — Diagnóstico por Punção Articular", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },

    // ════════════════════════════════════════════════
    // MEDICINA DE URGÊNCIA — subárea nova (interface clínica)
    // ════════════════════════════════════════════════
    { area: "Clínica Médica", subarea: "Medicina de Urgência", tema: "Choque — Classificação, Diagnóstico e Manejo Inicial", peso_prova: 10, frequencia_prova: 93, score: 36.1, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Medicina de Urgência", tema: "Ressuscitação Volêmica — Cristaloide vs Coloide", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Medicina de Urgência", tema: "Intoxicação por Organofosforado — Atropina e Pralidoxima", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Medicina de Urgência", tema: "Intoxicação por Paracetamol — N-acetilcisteína", peso_prova: 8, frequencia_prova: 73, score: 27.9, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Medicina de Urgência", tema: "Anafilaxia — Adrenalina e Protocolo", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Medicina de Urgência", tema: "Dor Torácica — Diagnóstico Diferencial na Emergência", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Medicina de Urgência", tema: "Dispneia Aguda — Diagnóstico Diferencial e Abordagem", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Medicina de Urgência", tema: "Síncope — Investigação e Estratificação de Risco", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Clínica Médica", subarea: "Medicina de Urgência", tema: "Parada Cardiorrespiratória — BLS e ACLS Atualizado", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Clínica Médica", subarea: "Medicina de Urgência", tema: "Sedação e Analgesia na UTI — Escalas de Richmond e Ramsey", peso_prova: 7, frequencia_prova: 63, score: 23.8, prioridade: 2 },

    // ═══════════════════════════════════════════════════════════════
    // EXPANSÃO — PEDIATRIA (novas subespecialidades + adensamento)
    // ═══════════════════════════════════════════════════════════════
// ── NEONATOLOGIA ──
    { area: "Pediatria", subarea: "Neonatologia", tema: "Síndrome do Desconforto Respiratório (SDR)", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Asfixia Perinatal e Encefalopatia Hipóxico-Isquêmica", peso_prova: 10, frequencia_prova: 90, score: 35.0, prioridade: 1 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Enterocolite Necrosante", peso_prova: 9, frequencia_prova: 82, score: 31.9, prioridade: 1 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Hemorragia Intracraniana Neonatal", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Persistência do Canal Arterial", peso_prova: 8, frequencia_prova: 78, score: 29.7, prioridade: 2 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Hipoglicemia Neonatal", peso_prova: 9, frequencia_prova: 83, score: 32.2, prioridade: 1 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Doença Hemolítica do Recém-Nascido", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Taquipneia Transitória do Recém-Nascido", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Infecção Congênita (TORCH)", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Síndrome de Aspiração de Mecônio", peso_prova: 8, frequencia_prova: 74, score: 28.0, prioridade: 2 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Triagem Neonatal (Teste do Pezinho)", peso_prova: 9, frequencia_prova: 88, score: 33.6, prioridade: 1 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Apneia da Prematuridade", peso_prova: 7, frequencia_prova: 68, score: 25.8, prioridade: 2 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Retinopatia da Prematuridade", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Displasia Broncopulmonar", peso_prova: 7, frequencia_prova: 66, score: 25.0, prioridade: 2 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Policitemia Neonatal", peso_prova: 6, frequencia_prova: 58, score: 22.0, prioridade: 3 },
    { area: "Pediatria", subarea: "Neonatologia", tema: "Onfalite e Infecções do Coto Umbilical", peso_prova: 6, frequencia_prova: 55, score: 21.0, prioridade: 3 },

    // ── INFECTOLOGIA PEDIÁTRICA ──
    { area: "Pediatria", subarea: "Infectologia Pediátrica", tema: "Meningite Bacteriana na Infância", peso_prova: 10, frequencia_prova: 93, score: 36.1, prioridade: 1 },
    { area: "Pediatria", subarea: "Infectologia Pediátrica", tema: "Coqueluche", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Pediatria", subarea: "Infectologia Pediátrica", tema: "Sarampo", peso_prova: 9, frequencia_prova: 84, score: 32.4, prioridade: 1 },
    { area: "Pediatria", subarea: "Infectologia Pediátrica", tema: "Varicela e Complicações", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Infectologia Pediátrica", tema: "Escarlatina", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Pediatria", subarea: "Infectologia Pediátrica", tema: "Rubéola", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Infectologia Pediátrica", tema: "Exantema Súbito (Roséola)", peso_prova: 7, frequencia_prova: 68, score: 25.8, prioridade: 2 },
    { area: "Pediatria", subarea: "Infectologia Pediátrica", tema: "Doença de Kawasaki", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Infectologia Pediátrica", tema: "Febre Reumática", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Pediatria", subarea: "Infectologia Pediátrica", tema: "Toxoplasmose Congênita", peso_prova: 8, frequencia_prova: 77, score: 29.3, prioridade: 2 },
    { area: "Pediatria", subarea: "Infectologia Pediátrica", tema: "HIV na Criança e Transmissão Vertical", peso_prova: 8, frequencia_prova: 78, score: 29.7, prioridade: 2 },
    { area: "Pediatria", subarea: "Infectologia Pediátrica", tema: "Tuberculose na Infância", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Pediatria", subarea: "Infectologia Pediátrica", tema: "Síndrome Mão-Pé-Boca", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Infectologia Pediátrica", tema: "Epiglotite Aguda", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },

    // ── PNEUMOLOGIA PEDIÁTRICA ──
    { area: "Pediatria", subarea: "Pneumologia Pediátrica", tema: "Crupe (Laringotraqueobronquite)", peso_prova: 9, frequencia_prova: 88, score: 33.6, prioridade: 1 },
    { area: "Pediatria", subarea: "Pneumologia Pediátrica", tema: "Asma na Infância — Classificação e Tratamento", peso_prova: 10, frequencia_prova: 93, score: 36.1, prioridade: 1 },
    { area: "Pediatria", subarea: "Pneumologia Pediátrica", tema: "Pneumonia na Infância — Etiologia por Faixa Etária", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Pediatria", subarea: "Pneumologia Pediátrica", tema: "Bronquiolite Viral Aguda — Manejo", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Pneumologia Pediátrica", tema: "Corpo Estranho nas Vias Aéreas", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Pediatria", subarea: "Pneumologia Pediátrica", tema: "Fibrose Cística", peso_prova: 8, frequencia_prova: 78, score: 29.7, prioridade: 2 },
    { area: "Pediatria", subarea: "Pneumologia Pediátrica", tema: "Derrame Pleural na Criança", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },

    // ── GASTROENTEROLOGIA PEDIÁTRICA ──
    { area: "Pediatria", subarea: "Gastroenterologia Pediátrica", tema: "Estenose Hipertrófica do Piloro", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Pediatria", subarea: "Gastroenterologia Pediátrica", tema: "Invaginação Intestinal", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Pediatria", subarea: "Gastroenterologia Pediátrica", tema: "Doença de Hirschsprung", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Pediatria", subarea: "Gastroenterologia Pediátrica", tema: "Atresia de Esôfago e Fístula Traqueoesofágica", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Gastroenterologia Pediátrica", tema: "Gastroenterite Aguda e Desidratação — Planos A, B, C", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Gastroenterologia Pediátrica", tema: "Diarreia Persistente e Crônica na Infância", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Gastroenterologia Pediátrica", tema: "Hérnia Diafragmática Congênita", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Pediatria", subarea: "Gastroenterologia Pediátrica", tema: "Atresia de Vias Biliares", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Gastroenterologia Pediátrica", tema: "Refluxo Gastroesofágico na Infância", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Pediatria", subarea: "Gastroenterologia Pediátrica", tema: "Vólvulo Intestinal Neonatal", peso_prova: 7, frequencia_prova: 68, score: 25.8, prioridade: 2 },

    // ── CARDIOLOGIA PEDIÁTRICA ──
    { area: "Pediatria", subarea: "Cardiologia Pediátrica", tema: "Cardiopatias Congênitas Acianóticas (CIV, CIA, PCA)", peso_prova: 10, frequencia_prova: 93, score: 36.1, prioridade: 1 },
    { area: "Pediatria", subarea: "Cardiologia Pediátrica", tema: "Cardiopatias Congênitas Cianóticas (Tetralogia de Fallot, TGA)", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Pediatria", subarea: "Cardiologia Pediátrica", tema: "Coarctação da Aorta", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Cardiologia Pediátrica", tema: "Miocardite e Cardiopatia Reumática", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Pediatria", subarea: "Cardiologia Pediátrica", tema: "Insuficiência Cardíaca Congestiva na Criança", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Cardiologia Pediátrica", tema: "Síndrome de Hipoplasia do Coração Esquerdo", peso_prova: 7, frequencia_prova: 62, score: 23.5, prioridade: 3 },

    // ── NEUROLOGIA PEDIÁTRICA ──
    { area: "Pediatria", subarea: "Neurologia Pediátrica", tema: "Convulsão Febril", peso_prova: 10, frequencia_prova: 93, score: 36.1, prioridade: 1 },
    { area: "Pediatria", subarea: "Neurologia Pediátrica", tema: "Epilepsia na Infância — Síndromes Epilépticas", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Pediatria", subarea: "Neurologia Pediátrica", tema: "Estado de Mal Epiléptico na Criança", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Neurologia Pediátrica", tema: "Hidrocefalia", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Pediatria", subarea: "Neurologia Pediátrica", tema: "Paralisia Cerebral", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Neurologia Pediátrica", tema: "Meningite Asséptica (Viral)", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Neurologia Pediátrica", tema: "Deficiência de Desenvolvimento Neuropsicomotor (DNPM)", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Pediatria", subarea: "Neurologia Pediátrica", tema: "Síndrome de West e Espasmos Infantis", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },

    // ── NUTRIÇÃO E DESENVOLVIMENTO ──
    { area: "Pediatria", subarea: "Nutrição Pediátrica", tema: "Desnutrição Grave — Marasmo e Kwashiorkor", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Pediatria", subarea: "Nutrição Pediátrica", tema: "Deficiência de Ferro e Anemia Ferropriva na Infância", peso_prova: 10, frequencia_prova: 90, score: 35.0, prioridade: 1 },
    { area: "Pediatria", subarea: "Nutrição Pediátrica", tema: "Deficiência de Vitamina D e Raquitismo", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Nutrição Pediátrica", tema: "Introdução Alimentar e Alimentação Complementar", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Nutrição Pediátrica", tema: "Hipovitaminose A", peso_prova: 7, frequencia_prova: 66, score: 25.0, prioridade: 2 },

    // ── IMUNOLOGIA E REUMATOLOGIA PEDIÁTRICA ──
    { area: "Pediatria", subarea: "Reumatologia Pediátrica", tema: "Artrite Idiopática Juvenil", peso_prova: 9, frequencia_prova: 84, score: 32.4, prioridade: 1 },
    { area: "Pediatria", subarea: "Reumatologia Pediátrica", tema: "Púrpura de Henoch-Schönlein", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Pediatria", subarea: "Reumatologia Pediátrica", tema: "Púrpura Trombocitopênica Imune na Criança", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Pediatria", subarea: "Reumatologia Pediátrica", tema: "Imunodeficiências Primárias — Apresentação Clínica", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },

    // ── NEFROLOGIA PEDIÁTRICA ──
    { area: "Pediatria", subarea: "Nefrologia Pediátrica", tema: "Síndrome Nefrótica na Criança (Doença de Lesão Mínima)", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Pediatria", subarea: "Nefrologia Pediátrica", tema: "Síndrome Hemolítico-Urêmica (SHU)", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Pediatria", subarea: "Nefrologia Pediátrica", tema: "Infecção Urinária na Criança — Investigação e Seguimento", peso_prova: 9, frequencia_prova: 88, score: 33.6, prioridade: 1 },
    { area: "Pediatria", subarea: "Nefrologia Pediátrica", tema: "Glomerulonefrite Pós-Estreptocócica", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Nefrologia Pediátrica", tema: "Refluxo Vesicoureteral", peso_prova: 7, frequencia_prova: 66, score: 25.0, prioridade: 2 },

    // ── HEMATOLOGIA PEDIÁTRICA ──
    { area: "Pediatria", subarea: "Hematologia Pediátrica", tema: "Doença Falciforme na Criança", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Pediatria", subarea: "Hematologia Pediátrica", tema: "Leucemia Linfoide Aguda (LLA) na Infância", peso_prova: 9, frequencia_prova: 84, score: 32.4, prioridade: 1 },
    { area: "Pediatria", subarea: "Hematologia Pediátrica", tema: "Talassemia", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },

    // ── ENDOCRINOLOGIA PEDIÁTRICA ──
    { area: "Pediatria", subarea: "Endocrinologia Pediátrica", tema: "Diabetes Mellitus Tipo 1 na Infância", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Pediatria", subarea: "Endocrinologia Pediátrica", tema: "Cetoacidose Diabética na Criança", peso_prova: 10, frequencia_prova: 90, score: 35.0, prioridade: 1 },
    { area: "Pediatria", subarea: "Endocrinologia Pediátrica", tema: "Hipotireoidismo Congênito", peso_prova: 9, frequencia_prova: 88, score: 33.6, prioridade: 1 },
    { area: "Pediatria", subarea: "Endocrinologia Pediátrica", tema: "Puberdade Precoce e Atrasada", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Endocrinologia Pediátrica", tema: "Baixa Estatura — Diagnóstico Diferencial", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Pediatria", subarea: "Endocrinologia Pediátrica", tema: "Hiperplasia Adrenal Congênita", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },

    // ── SAÚDE MENTAL PEDIÁTRICA ──
    { area: "Pediatria", subarea: "Saúde Mental Pediátrica", tema: "Autismo (TEA) — Rastreamento e Conduta na APS", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Saúde Mental Pediátrica", tema: "TDAH — Diagnóstico e Manejo", peso_prova: 8, frequencia_prova: 78, score: 29.7, prioridade: 2 },
    { area: "Pediatria", subarea: "Saúde Mental Pediátrica", tema: "Violência e Maus-Tratos na Infância", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },

    // ── URGÊNCIA PEDIÁTRICA ──
    { area: "Pediatria", subarea: "Urgência Pediátrica", tema: "Reanimação Cardiopulmonar Pediátrica (PALS)", peso_prova: 10, frequencia_prova: 93, score: 36.1, prioridade: 1 },
    { area: "Pediatria", subarea: "Urgência Pediátrica", tema: "Choque na Criança — Tipos e Manejo", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Pediatria", subarea: "Urgência Pediátrica", tema: "Queimaduras na Criança", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Urgência Pediátrica", tema: "Intoxicação Exógena na Criança", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Pediatria", subarea: "Urgência Pediátrica", tema: "Afogamento e Trauma Pediátrico", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },

    // ── VACINAÇÃO ──
    { area: "Pediatria", subarea: "Imunizações", tema: "Calendário Vacinal do PNI — Criança e Adolescente", peso_prova: 10, frequencia_prova: 95, score: 36.5, prioridade: 1 },
    { area: "Pediatria", subarea: "Imunizações", tema: "Contraindicações Vacinais e Eventos Adversos", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Pediatria", subarea: "Imunizações", tema: "Vacinas Especiais e Situações de Risco", peso_prova: 7, frequencia_prova: 66, score: 25.0, prioridade: 2 },

    // ═══════════════════════════════════════════════════════════════
    // EXPANSÃO — GINECOLOGIA E OBSTETRÍCIA (novas subespecialidades + adensamento)
    // ═══════════════════════════════════════════════════════════════
// ── OBSTETRÍCIA — PRÉ-NATAL ──
    { area: "Ginecologia e Obstetrícia", subarea: "Pré-natal", tema: "Assistência Pré-natal de Baixo Risco — Rotinas e Condutas", peso_prova: 10, frequencia_prova: 93, score: 36.1, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Pré-natal", tema: "Semiologia Obstétrica — Manobras de Leopold e DUM", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Pré-natal", tema: "Diabetes Gestacional — Diagnóstico e Manejo", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Pré-natal", tema: "Sífilis na Gestação — Tratamento e Notificação", peso_prova: 10, frequencia_prova: 93, score: 36.1, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Pré-natal", tema: "Toxoplasmose na Gestação", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Pré-natal", tema: "Rubéola na Gestação", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Pré-natal", tema: "Citomegalovírus na Gestação", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Pré-natal", tema: "HIV na Gestação — Prevenção da Transmissão Vertical", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Pré-natal", tema: "Hepatite B na Gestação", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Pré-natal", tema: "Isoimunização Rh — Profilaxia com Anti-D", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Pré-natal", tema: "Rastreamento de Aneuploidias — Translucência Nucal e Marcadores", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Pré-natal", tema: "Vaginose Bacteriana e Infecções Vaginais na Gestação", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },

    // ── OBSTETRÍCIA — INTERCORRÊNCIAS ──
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia — Intercorrências", tema: "Aborto — Tipos, Diagnóstico e Conduta", peso_prova: 10, frequencia_prova: 93, score: 36.1, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia — Intercorrências", tema: "Gravidez Ectópica", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia — Intercorrências", tema: "Doença Trofoblástica Gestacional (Mola Hidatiforme)", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia — Intercorrências", tema: "Hiperemese Gravídica", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia — Intercorrências", tema: "Anemia na Gestação", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia — Intercorrências", tema: "Colestase Intra-hepática da Gestação", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia — Intercorrências", tema: "Tromboembolismo Venoso na Gestação", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia — Intercorrências", tema: "Gestação Gemelar — Classificação e Complicações", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia — Intercorrências", tema: "Oligodrâmnio e Polidrâmnio", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia — Intercorrências", tema: "Síndrome HELLP", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Obstetrícia — Intercorrências", tema: "Eclâmpsia — Tratamento com Sulfato de Magnésio", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },

    // ── OBSTETRÍCIA — TRABALHO DE PARTO E PARTO ──
    { area: "Ginecologia e Obstetrícia", subarea: "Trabalho de Parto e Parto", tema: "Mecanismo do Trabalho de Parto — Fases e Partograma", peso_prova: 10, frequencia_prova: 93, score: 36.1, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Trabalho de Parto e Parto", tema: "Distocias — Diagnóstico e Conduta", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Trabalho de Parto e Parto", tema: "Indicações de Cesariana vs Parto Normal", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Trabalho de Parto e Parto", tema: "Hemorragia Pós-Parto — Causas e Manejo (4 T's)", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Trabalho de Parto e Parto", tema: "Apresentação Pélvica — Manejo e Versão Cefálica", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Trabalho de Parto e Parto", tema: "Embolia do Líquido Amniótico", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Trabalho de Parto e Parto", tema: "Prolapso de Cordão Umbilical", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Trabalho de Parto e Parto", tema: "Ruptura Uterina", peso_prova: 9, frequencia_prova: 84, score: 32.4, prioridade: 1 },

    // ── OBSTETRÍCIA — PUERPÉRIO ──
    { area: "Ginecologia e Obstetrícia", subarea: "Puerpério", tema: "Puerpério Normal — Involução Uterina e Lóquios", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Puerpério", tema: "Endometrite Puerperal", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Puerpério", tema: "Mastite Puerperal e Abscesso Mamário", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Puerpério", tema: "Depressão Pós-Parto e Psicose Puerperal", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Puerpério", tema: "Contracepção no Puerpério", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Puerpério", tema: "Trombose Venosa Puerperal", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },

    // ── GINECOLOGIA — ISTs E VULVOVAGINITES ──
    { area: "Ginecologia e Obstetrícia", subarea: "ISTs e Vulvovaginites", tema: "Candidíase Vulvovaginal", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "ISTs e Vulvovaginites", tema: "Gonorreia e Clamídia", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "ISTs e Vulvovaginites", tema: "Tricomoníase", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "ISTs e Vulvovaginites", tema: "Herpes Genital", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "ISTs e Vulvovaginites", tema: "HPV — Condiloma Acuminado e Tratamento", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "ISTs e Vulvovaginites", tema: "Sífilis Primária, Secundária e Terciária", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "ISTs e Vulvovaginites", tema: "Cancro Mole (Haemophilus ducreyi)", peso_prova: 7, frequencia_prova: 63, score: 23.9, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "ISTs e Vulvovaginites", tema: "Linfogranuloma Venéreo", peso_prova: 6, frequencia_prova: 55, score: 21.0, prioridade: 3 },

    // ── GINECOLOGIA — ONCOLOGIA GINECOLÓGICA ──
    { area: "Ginecologia e Obstetrícia", subarea: "Oncologia Ginecológica", tema: "Câncer de Colo do Útero — Rastreamento e Estadiamento", peso_prova: 10, frequencia_prova: 93, score: 36.1, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Oncologia Ginecológica", tema: "Lesões Precursoras do Colo Uterino (NIC) e Colposcopia", peso_prova: 9, frequencia_prova: 88, score: 33.6, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Oncologia Ginecológica", tema: "Câncer de Endométrio", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Oncologia Ginecológica", tema: "Câncer de Ovário — Diagnóstico e Estadiamento", peso_prova: 9, frequencia_prova: 84, score: 32.4, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Oncologia Ginecológica", tema: "Câncer de Vulva", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Oncologia Ginecológica", tema: "Câncer de Mama — Rastreamento e Diagnóstico", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Oncologia Ginecológica", tema: "Câncer de Mama — Estadiamento e Tratamento", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Oncologia Ginecológica", tema: "Doença de Paget da Mama e Papiloma Intraductal", peso_prova: 6, frequencia_prova: 55, score: 21.0, prioridade: 3 },

    // ── GINECOLOGIA — DISTÚRBIOS MENSTRUAIS ──
    { area: "Ginecologia e Obstetrícia", subarea: "Distúrbios Menstruais", tema: "Sangramento Uterino Anormal — Classificação PALM-COEIN", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Distúrbios Menstruais", tema: "Dismenorreia Primária e Secundária", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Distúrbios Menstruais", tema: "Síndrome dos Ovários Policísticos (SOP)", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Distúrbios Menstruais", tema: "Amenorreia — Diagnóstico Diferencial", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Distúrbios Menstruais", tema: "Síndrome Pré-Menstrual (SPM) e TDPM", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },

    // ── GINECOLOGIA — PATOLOGIA BENIGNA ──
    { area: "Ginecologia e Obstetrícia", subarea: "Patologia Ginecológica Benigna", tema: "Endometriose — Diagnóstico e Tratamento", peso_prova: 10, frequencia_prova: 91, score: 35.4, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Patologia Ginecológica Benigna", tema: "Miomatose Uterina — Tipos e Indicação Cirúrgica", peso_prova: 9, frequencia_prova: 88, score: 33.6, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Patologia Ginecológica Benigna", tema: "Cisto de Ovário — Diagnóstico Diferencial e Conduta", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Patologia Ginecológica Benigna", tema: "Torção de Ovário", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Patologia Ginecológica Benigna", tema: "Pólipo Endometrial e Cervical", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Patologia Ginecológica Benigna", tema: "Abscesso Tubo-Ovariano", peso_prova: 8, frequencia_prova: 75, score: 28.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Patologia Ginecológica Benigna", tema: "Síndrome de Asherman (Sinéquias Uterinas)", peso_prova: 6, frequencia_prova: 55, score: 21.0, prioridade: 3 },

    // ── GINECOLOGIA — UROGINECOLOGIA ──
    { area: "Ginecologia e Obstetrícia", subarea: "Uroginecologia", tema: "Incontinência Urinária de Esforço e de Urgência", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Uroginecologia", tema: "Prolapso de Órgãos Pélvicos — Classificação e Tratamento", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Uroginecologia", tema: "Fístula Vesicovaginal", peso_prova: 6, frequencia_prova: 55, score: 21.0, prioridade: 3 },

    // ── GINECOLOGIA — CLIMATÉRIO ──
    { area: "Ginecologia e Obstetrícia", subarea: "Climatério e Menopausa", tema: "Menopausa — Diagnóstico e Sintomas Climatéricos", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Climatério e Menopausa", tema: "Terapia Hormonal da Menopausa — Indicações e Contraindicações", peso_prova: 9, frequencia_prova: 85, score: 32.5, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Climatério e Menopausa", tema: "Osteoporose na Mulher Pós-Menopausa", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Climatério e Menopausa", tema: "Atrofia Vulvovaginal", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },

    // ── GINECOLOGIA — REPRODUÇÃO E CONTRACEPÇÃO ──
    { area: "Ginecologia e Obstetrícia", subarea: "Contracepção e Reprodução", tema: "Métodos Contraceptivos — Comparativo e Indicações", peso_prova: 10, frequencia_prova: 92, score: 35.8, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Contracepção e Reprodução", tema: "Contracepção de Emergência", peso_prova: 9, frequencia_prova: 87, score: 33.5, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Contracepção e Reprodução", tema: "DIU — Tipos, Inserção e Complicações", peso_prova: 8, frequencia_prova: 76, score: 29.0, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Contracepção e Reprodução", tema: "Infertilidade do Casal — Investigação Básica", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Contracepção e Reprodução", tema: "Reprodução Assistida — Indicações e Técnicas Básicas", peso_prova: 7, frequencia_prova: 64, score: 24.3, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Contracepção e Reprodução", tema: "Abortamento Legal e Aspectos Éticos", peso_prova: 8, frequencia_prova: 74, score: 28.5, prioridade: 2 },

    // ── GINECOLOGIA — MAMA ──
    { area: "Ginecologia e Obstetrícia", subarea: "Patologia Mamária", tema: "Mastalgia — Diagnóstico Diferencial", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Patologia Mamária", tema: "Fibroadenoma Mamário", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 },
    { area: "Ginecologia e Obstetrícia", subarea: "Patologia Mamária", tema: "BI-RADS — Classificação e Conduta", peso_prova: 9, frequencia_prova: 86, score: 33.0, prioridade: 1 },
    { area: "Ginecologia e Obstetrícia", subarea: "Patologia Mamária", tema: "Galactorreia e Hiperprolactinemia", peso_prova: 7, frequencia_prova: 65, score: 24.5, prioridade: 2 }
];
