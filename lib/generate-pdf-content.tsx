export function generateArcticPDFContent(): string {
  return `
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cooper&Hunter Arctic Produktark</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
    h1 { color: #1e40af; border-bottom: 3px solid #1e40af; padding-bottom: 10px; }
    h2 { color: #2563eb; margin-top: 30px; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
    th { background-color: #1e40af; color: white; }
    .header { background-color: #f0f9ff; padding: 20px; margin-bottom: 30px; }
    .feature-list { columns: 2; }
    .feature-list li { margin-bottom: 8px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>COOPER&HUNTER ARCTIC SERIE</h1>
    <p><strong>Stil og Pålitelighet</strong></p>
  </div>

  <h2>Om Arctic-serien</h2>
  <p>Arctic-serien er designet for drift i varmemodus ved utetemperaturer ned til -25°C. Produktene i serien er utstyrt med en luftionisator. Moderne design og oversiktlig geometriske linjer på innedelens panel med LED-skjerm understreker konsistensen av stilen og sofistikert design.</p>

  <h2>Funksjoner</h2>
  <ul class="feature-list">
    <li>Hvilemodus</li>
    <li>CH 7-SKY-teknologi</li>
    <li>ECO-FRESH</li>
    <li>CH SMART-ION-filter</li>
    <li>Dobbel selvrensende</li>
    <li>Selvrensende</li>
    <li>Låsing av fjernkontrollen</li>
    <li>Timer</li>
    <li>LED-display</li>
    <li>Turbo-modus</li>
    <li>Vifte med flere hastigheter</li>
    <li>Avfuktningsfunksjon</li>
    <li>Wi-Fi</li>
    <li>IFEEL</li>
    <li>Beskyttelse mot frost</li>
    <li>Automatisk omstart</li>
    <li>Selvdiagnose</li>
    <li>Bakgrunnsbelysning på display</li>
    <li>Kablet styreenhet</li>
    <li>R32 kjølemedium</li>
    <li>Stille funksjon</li>
    <li>Automatisk beskyttelse</li>
    <li>8°C funksjon</li>
    <li>I-Action teknologi</li>
    <li>BLUE-FIN belegg</li>
    <li>Varm start</li>
  </ul>

  <h2>Tekniske Parametrar - Innedel</h2>
  <table>
    <tr>
      <th>Modell</th>
      <th>CH-S12FTXLA2-NG</th>
      <th>CH-S18FTXLA2-NG</th>
      <th>CH-S24FTXLA2-NG</th>
    </tr>
    <tr>
      <td>Luftstrømsvolum (m³/h)</td>
      <td>360/420/480/540/600/650/700</td>
      <td>460/520/570/610/680/750/850</td>
      <td>800/850/900/950/1000/1100/1250</td>
    </tr>
    <tr>
      <td>Lydtrykknivå dB(A)</td>
      <td>21/23/24/26/29/33/38</td>
      <td>24/27/31/33/38/41/45</td>
      <td>27/29/35/37/39/42/47</td>
    </tr>
    <tr>
      <td>Avfukting (l/h)</td>
      <td>1,40</td>
      <td>1,9</td>
      <td>2,4</td>
    </tr>
    <tr>
      <td>Vekt (kg)</td>
      <td>10,5</td>
      <td>13</td>
      <td>16,5</td>
    </tr>
    <tr>
      <td>B (mm)</td>
      <td>845</td>
      <td>970</td>
      <td>1078</td>
    </tr>
    <tr>
      <td>H (mm)</td>
      <td>289</td>
      <td>300</td>
      <td>325</td>
    </tr>
    <tr>
      <td>D (mm)</td>
      <td>209</td>
      <td>224</td>
      <td>246</td>
    </tr>
  </table>

  <h2>Kapasitet og Energieffektivitet</h2>
  <table>
    <tr>
      <th>Modell</th>
      <th>CH-S12FTXLA2-NG</th>
      <th>CH-S18FTXLA2-NG</th>
      <th>CH-S24FTXLA2-NG</th>
    </tr>
    <tr>
      <td>Kjøling (kW)</td>
      <td>3,51 (0,90-4,40)</td>
      <td>5,20 (1,00-6,10)</td>
      <td>7,10 (2,00-8,85)</td>
    </tr>
    <tr>
      <td>Varme (kW)</td>
      <td>3,81 (0,90-4,70)</td>
      <td>5,60 (1,10-6,60)</td>
      <td>7,80 (1,80-9,45)</td>
    </tr>
    <tr>
      <td>Strømforbruk Kjøling (kW)</td>
      <td>0,96 (0,22-1,40)</td>
      <td>1,58 (0,10-2,35)</td>
      <td>2,03 (0,45-2,90)</td>
    </tr>
    <tr>
      <td>Strømforbruk Varme (kW)</td>
      <td>0,95 (0,22-1,55)</td>
      <td>1,44 (0,18-2,40)</td>
      <td>2,00 (0,35-3,00)</td>
    </tr>
    <tr>
      <td>SEER (Kjøling)</td>
      <td>7,1 (A++)</td>
      <td>7,1 (A++)</td>
      <td>7,0 (A++)</td>
    </tr>
    <tr>
      <td>SCOP (Oppvarming)</td>
      <td>5,2 (A+++)</td>
      <td>5,7 (A+++)</td>
      <td>5,4 (A+++)</td>
    </tr>
  </table>

  <h2>Tekniske Parametrar - Utedel</h2>
  <table>
    <tr>
      <th>Spesifikasjon</th>
      <th>CH-S12FTXLA2-NG</th>
      <th>CH-S18FTXLA2-NG</th>
      <th>CH-S24FTXLA2-NG</th>
    </tr>
    <tr>
      <td>Lydtrykknivå dB(A)</td>
      <td>52</td>
      <td>56</td>
      <td>59</td>
    </tr>
    <tr>
      <td>Type kompressor</td>
      <td colspan="3">Roterende</td>
    </tr>
    <tr>
      <td>Type kjølemedium</td>
      <td colspan="3">R32</td>
    </tr>
    <tr>
      <td>Temperaturintervall kjøling (°C)</td>
      <td colspan="3">-15...+50</td>
    </tr>
    <tr>
      <td>Temperaturintervall oppvarming (°C)</td>
      <td colspan="3">-25...+30</td>
    </tr>
    <tr>
      <td>Strømforsyning</td>
      <td colspan="3">~220-240 V/50 Hz/1 fas</td>
    </tr>
    <tr>
      <td>Vekt (kg)</td>
      <td>24,5</td>
      <td>30,5</td>
      <td>41,5</td>
    </tr>
    <tr>
      <td>Mengde kjølemedium (kg)</td>
      <td>0,57</td>
      <td>0,82</td>
      <td>1,50</td>
    </tr>
    <tr>
      <td>Væskerørlednings diameter</td>
      <td colspan="3">6,35/1/4"</td>
    </tr>
    <tr>
      <td>Gassrørlednings diameter</td>
      <td>9,52/3/8"</td>
      <td>12,7/1/2"</td>
      <td>15,88/5/8"</td>
    </tr>
    <tr>
      <td>Maksimal høydenivåforskjell (m)</td>
      <td colspan="3">10</td>
    </tr>
    <tr>
      <td>Maksimal lengde på rørledningen (m)</td>
      <td>15</td>
      <td>25</td>
      <td>25</td>
    </tr>
  </table>

  <p style="margin-top: 40px; font-size: 12px; color: #666;">
    * SEER – sesongmessig koeffisient for kjølekapasitet til systemet.<br>
    ** SCOP – sesongmessig koeffisient for systemets kjølekapasitet.
  </p>
</body>
</html>
  `.trim()
}

export function generateDaytonaPDFContent(): string {
  return `
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cooper&Hunter Daytona Produktark</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
    h1 { color: #1e40af; border-bottom: 3px solid #1e40af; padding-bottom: 10px; }
    h2 { color: #2563eb; margin-top: 30px; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
    th { background-color: #1e40af; color: white; }
    .header { background-color: #f0f9ff; padding: 20px; margin-bottom: 30px; }
    .feature-list { columns: 2; }
    .feature-list li { margin-bottom: 8px; }
    .highlight { background-color: #fef3c7; padding: 15px; margin: 20px 0; border-left: 4px solid #f59e0b; }
  </style>
</head>
<body>
  <div class="header">
    <h1>COOPER&HUNTER DAYTONA SERIEN</h1>
    <p><strong>Varmepumpa for folk flest</strong></p>
  </div>

  <h2>Om Daytona-serien</h2>
  <p>Daytona er varmepumpen som gir deg alt du trenger – og litt til. Den er fabrikkgarantert for drift helt ned til –25 °C og har et av markedets laveste lydnivå på kun 19 dB.</p>
  
  <p>Med Blue-Fin-belegg på utedelen får du ekstra beskyttelse mot korrosjon og lengre levetid, mens I-Action-teknologi sikrer jevn og stabil drift selv ved ultralave frekvenser.</p>

  <div class="highlight">
    <strong>CH 7-SKY Technology:</strong> Et omfattende filtreringssystem med syv ulike filtre for ren og frisk inneluft.
  </div>

  <div class="highlight">
    <strong>DOUBLE SELF-CLEAN:</strong> Varmepumpen rengjøres fullstendig på bare 30 minutter – effektivt mot støv, sopp, virus og bakterier.
  </div>

  <p>Med innebygd Wi-Fi kan du styre varmepumpen enkelt via mobil eller nettbrett, og den smarte 8 °C-funksjonen holder rommet frostfritt med minimalt strømforbruk.</p>

  <p><strong>Tilgjengelige farger:</strong> Hvit (WP), Grafitt/Svart (FB) og Sølv (SC)</p>

  <h2>Funksjoner</h2>
  <ul class="feature-list">
    <li>Wi-Fi</li>
    <li>Kjøle-modus</li>
    <li>ECO FRESH</li>
    <li>R32 kjølemedium</li>
    <li>I-Action teknologi</li>
    <li>Fjernkontroll</li>
    <li>Varme-modus</li>
    <li>Inverter</li>
    <li>CH 7-SKY-teknologi</li>
    <li>Automatisk omstart</li>
    <li>BLUE-FIN belegg</li>
    <li>Ventilasjons-modus</li>
    <li>Låsing av fjernkontrollen</li>
    <li>X-Fan funksjon</li>
    <li>Selvdiagnose</li>
    <li>Daglig timer</li>
    <li>Avfuktings-funksjon</li>
    <li>LED-display</li>
    <li>CH SMART-ION-filter</li>
    <li>Automatisk avtining</li>
    <li>I-Feel</li>
    <li>Kablet styreenhet</li>
    <li>Energieffektive kobberrør</li>
    <li>Dobbel selvrensende</li>
    <li>Turbo-modus</li>
    <li>Vifte med flere hastigheter</li>
    <li>BMS tilkobling</li>
    <li>Varm start</li>
    <li>Potensialfri kontakt</li>
    <li>Varmekabel i dryppanne</li>
    <li>Vertikal SWING</li>
    <li>Horisontal SWING</li>
    <li>8 °C funksjon</li>
    <li>Hvile-modus</li>
    <li>Stille-modus</li>
  </ul>

  <h2>Tekniske Parametrar - Innedel</h2>
  <table>
    <tr>
      <th>Modell</th>
      <th>CH-S12FTXD2-***</th>
      <th>CH-S18FTXD2-***</th>
      <th>CH-S24FTXD2-***</th>
    </tr>
    <tr>
      <td>Luftmengde pr. time (m³/t)</td>
      <td>700/650/600/540/480/420/360/300</td>
      <td>850/750/680/610/570/520/460</td>
      <td>1250/1100/1000/950/900/850/800/600</td>
    </tr>
    <tr>
      <td>Lydnivå dB(A)</td>
      <td>19/22/24/27/32/35/38</td>
      <td>24/27/30/34/38/40/45</td>
      <td>26/28/35/37/39/42/47</td>
    </tr>
    <tr>
      <td>Avfukting (l/t)</td>
      <td>1,40</td>
      <td>1,9</td>
      <td>2,4</td>
    </tr>
    <tr>
      <td>Vekt (kg)</td>
      <td>11</td>
      <td>13,5</td>
      <td>16,5</td>
    </tr>
    <tr>
      <td>W (mm)</td>
      <td>889</td>
      <td>1013</td>
      <td>1122</td>
    </tr>
    <tr>
      <td>H (mm)</td>
      <td>294</td>
      <td>307</td>
      <td>329</td>
    </tr>
    <tr>
      <td>D (mm)</td>
      <td>212</td>
      <td>221</td>
      <td>247</td>
    </tr>
  </table>

  <h2>Kapasitet og Energieffektivitet</h2>
  <table>
    <tr>
      <th>Modell</th>
      <th>CH-S12FTXD2-***</th>
      <th>CH-S18FTXD2-***</th>
      <th>CH-S24FTXD2-***</th>
    </tr>
    <tr>
      <td>Kjøling (kW)</td>
      <td>3,51 (0,90-4,40)</td>
      <td>5,20 (1,00-6,10)</td>
      <td>7,10 (2,00-8,85)</td>
    </tr>
    <tr>
      <td>Varme (kW)</td>
      <td>3,81 (0,90-4,70)</td>
      <td>5,60 (1,10-6,60)</td>
      <td>7,80 (1,80-9,45)</td>
    </tr>
    <tr>
      <td>Strømforbruk Kjøling (kW)</td>
      <td>0,96 (0,22-1,40)</td>
      <td>1,58 (0,10-2,35)</td>
      <td>2,03 (0,45-2,90)</td>
    </tr>
    <tr>
      <td>Strømforbruk Varme (kW)</td>
      <td>0,95 (0,22-1,55)</td>
      <td>1,44 (0,18-2,40)</td>
      <td>2,00 (0,35-3,00)</td>
    </tr>
    <tr>
      <td>SEER (Kjøling)</td>
      <td>7,1 (A++)</td>
      <td>7,1 (A++)</td>
      <td>7,0 (A++)</td>
    </tr>
    <tr>
      <td>SCOP (Oppvarming)</td>
      <td>4,1 (A+)</td>
      <td>4,2 (A+)</td>
      <td>4,2 (A+)</td>
    </tr>
  </table>

  <h2>Tekniske Parametrar - Utedel</h2>
  <table>
    <tr>
      <th>Spesifikasjon</th>
      <th>CH-S12FTXD2-***</th>
      <th>CH-S18FTXD2-***</th>
      <th>CH-S24FTXD2-***</th>
    </tr>
    <tr>
      <td>Lydnivå dB(A)</td>
      <td>52</td>
      <td>56</td>
      <td>59</td>
    </tr>
    <tr>
      <td>Type kompressor</td>
      <td colspan="3">Rotary</td>
    </tr>
    <tr>
      <td>Type kjølemedium</td>
      <td colspan="3">R32</td>
    </tr>
    <tr>
      <td>Temperaturintervall for kjøling (°C)</td>
      <td colspan="3">-15...+50</td>
    </tr>
    <tr>
      <td>Temperaturintervall for oppvarming (°C)</td>
      <td colspan="3">-25...+30</td>
    </tr>
    <tr>
      <td>Strømforsyning</td>
      <td colspan="3">~220-240V/50Hz/1Ph</td>
    </tr>
    <tr>
      <td>Vekt (kg)</td>
      <td>24,5</td>
      <td>30,5</td>
      <td>41,5</td>
    </tr>
    <tr>
      <td>Mengde kjølemedium (kg)</td>
      <td>0,57</td>
      <td>0,82</td>
      <td>1,50</td>
    </tr>
    <tr>
      <td>Væskerørlednings diameter</td>
      <td colspan="3">6,35/1/4"</td>
    </tr>
    <tr>
      <td>Gassrørlednings diameter</td>
      <td>9,52/3/8"</td>
      <td>12,7/1/2"</td>
      <td>15,88/5/8"</td>
    </tr>
    <tr>
      <td>Maksimal høydeforskjell inne-/utedel (m)</td>
      <td colspan="3">10</td>
    </tr>
    <tr>
      <td>Maksimal lengde på rørledningen (m)</td>
      <td>15</td>
      <td>25</td>
      <td>25</td>
    </tr>
  </table>

  <p style="margin-top: 40px; font-size: 12px; color: #666;">
    * SEER – sesongmessig koeffisient for kjølekapasitet til systemet.<br>
    ** SCOP – sesongmessig koeffisient for systemets kjølekapasitet.<br>
    *** Enheten kan leveres i tre ulike farger: hvit (WP), svart (FB) og sølv (SC).
  </p>
</body>
</html>
  `.trim()
}
