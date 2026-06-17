import { test, expect } from '@playwright/test';

const MEU_RM   = '251629'
const BASE_URL = 'https://prova.carvalho.cc';

test('submissão completa da prova', async ({ browser }) => {
  const context = await browser.newContext({
    extraHTTPHeaders: { 'x-exam-student-id': MEU_RM },
  });
  const page = await context.newPage();

  await page.goto(BASE_URL);

  // Dry-run banner should NOT appear
  await expect(page.locator('#dry-run-banner')).not.toBeVisible();

  // escreva o teste a partir daqui
  await page.getByLabel("Número de Matrícula").click()
  await page.getByLabel("Número de Matrícula").fill("251629")

  await page.getByLabel("Nome Completo").click()
  await page.getByLabel("Nome Completo").fill("Artur Albion")

  await page.getByLabel("URL do Repositório").click()
  await page.getByLabel("URL do Repositório").fill("https://github.com/Tuzink/teste-prova.git")

  await page.getByRole('button', {name: 'Iniciar Prova'}).click()

  // Questão 1
  await page.getByLabel("Para manter o teste rápido e determinístico, sem depender de um serviço externo").check();
  await page.getByRole('button', { name: 'Próxima' }).click();

  // Questão 2
  await page.getByLabel("Uma tupla com o valor atual do estado e uma função de atualização").check();
  await page.getByRole('button', { name: 'Próxima' }).click();

  // Questão 3
  await page.getByLabel("Testa um único trecho de lógica de forma isolada, sem dependências externas").check();
  await page.getByRole('button', { name: 'Próxima' }).click();

  // Questão 4
  await page.getByLabel("Os testes devem ser simples e legíveis — evite complexidade desnecessária").check();
  await page.getByRole('button', { name: 'Próxima' }).click();

  // Questão 5
  await page.getByLabel("Um conjunto de casos de teste agrupados em torno de uma funcionalidade ou preocupação").check();
  await page.getByRole('button', { name: 'Próxima' }).click();

  // Questão 6
  await page.getByLabel("Quantas vezes a função foi chamada e com quais argumentos").check();
  await page.getByRole('button', { name: 'Próxima' }).click();

  // Questão 7
  await page.getByLabel("Executa uma função de configuração antes de cada caso de teste individualmente").check();
  await page.getByRole('button', { name: 'Próxima' }).click();

  // Questão 8
  await page.getByLabel("Don't Repeat Yourself — evite duplicar conhecimento ou lógica").check();
  await page.getByRole('button', { name: 'Próxima' }).click();

  // Questão 9
  await page.getByLabel("Executar um efeito colateral (ex: buscar dados, configurar uma inscrição) após a renderização").check();
  await page.getByRole('button', { name: 'Próxima' }).click();

  // Questão 10
  await page.getByLabel("Teste de integração").check();
  await page.getByRole('button', { name: 'Próxima' }).click();

  // Questão 11
  await page.getByLabel("Porque são os mais caros de escrever, executar e manter").check();
  await page.getByRole('button', { name: 'Próxima' }).click();

  // Questão 12
  await page.getByLabel("A porcentagem do código de produção executada pela suite de testes").check();
  await page.getByRole('button', { name: 'Próxima' }).click();

  // Questão 13
  await page.getByLabel("Incluir na lista de dependências um valor que é reatribuído dentro do próprio efeito").check();
  await page.getByRole('button', { name: 'Próxima' }).click();

  // Questão 14
  await page.getByLabel("Os serviços podem ser implantados, escalados e desenvolvidos de forma independente").check();
  await page.getByRole('button', { name: 'Próxima' }).click();

  // Questão 15
  await page.getByLabel("Testes unitários").check();
  await page.getByRole('button', { name: 'Próxima' }).click();

  // Questão 16
  await page.getByLabel("Uma função que valida os dados de entrada, salva no banco de dados e envia um e-mail").check();
  await page.getByRole('button', { name: 'Enviar' }).click();

  // Confirmar envio
  await expect(page.getByRole('heading', { name: 'Prova enviada!' })).toBeVisible();
});