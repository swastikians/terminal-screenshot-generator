import { Font } from 'canvacord';
import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { OutputData } from './outputs';
import { names } from './names';
import { TerminalBuilder } from './image-generators/terminal';

await Font.fromFile('./font.ttf');

const terminal = new TerminalBuilder(800, 400);

for (const name of names) {
  terminal.setName(name);

  if (!existsSync(`./output/${name}`)) {
    await mkdir(`./output/${name}`, { recursive: true });
  }

  for (const [outputName, output] of Object.entries(OutputData)) {
    terminal.setContents(output);

    const image = await terminal.build({
      format: 'jpeg',
      embedFont: true,
    });

    await writeFile(`./output/${name}/${name}-${outputName}.jpeg`, image);
    console.log(`Generated ${name}-${outputName}.jpeg`);
  }
}
