import { Font } from 'canvacord';
import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { OutputData } from './outputs';
import { names } from './names';
import { TerminalBuilder } from './templates/terminal';
import { join } from 'node:path';

await Font.fromFile('./font.ttf');

const terminal = new TerminalBuilder(800, 400);

const OUTPUT_DIR = join(process.cwd(), 'output');

for (const name of names) {
  terminal.setName(name);

  const targetPath = join(OUTPUT_DIR, name);

  if (!existsSync(targetPath)) {
    await mkdir(targetPath, { recursive: true });
  }

  for (const [outputName, output] of Object.entries(OutputData)) {
    terminal.setContents(output);

    const image = await terminal.build({
      format: 'jpeg',
      embedFont: true,
    });

    const filePath = join(targetPath, `${name}-${outputName}.jpg`);
    await writeFile(filePath, image);
    console.log(`Generated ${filePath}`);
  }
}
