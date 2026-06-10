import { test, expect } from '@playwright/test';
import { QuicEndpoint } from 'node:quic';

const MEU_RM   = 'COLOQUE AQUI SEU RM'
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
  
  await page.getByRole("button", {name: "Iniciar Prova"}).click()

  




  

  // Confirmar envio
  // Remover o comentário quando terminar de escrever o código
  // await expect(page.getByRole('heading', { name: 'Prova enviada!' })).toBeVisible();
});