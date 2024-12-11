/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_UxmC59nB.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Lead investigations into organized crime, drug trafficking, and high-profile criminal activities.</li>\n<li>Conducted extensive surveillance operations utilizing advanced equipment and techniques to gather critical intelligence.</li>\n<li>Collaborated with federal agencies such as the FBI and DEA on joint task forces to dismantle criminal syndicates.</li>\n<li>Played a pivotal role in numerous undercover operations, successfully infiltrating criminal organizations and gathering actionable evidence for prosecution.</li>\n<li>Trained and mentored junior officers in surveillance tactics, undercover operations, and tactical maneuvers.</li>\n</ul>";

				const frontmatter = {"title":"Senior Detective","date":"1990 - Present","url":"http://ropibbe.nf/savadru","location":"Los Angeles, California","org":"Los Angeles Police Department (LAPD)","tags":["Law Enforcement","Police Work","Tactical Operations","Case Management"]};
				const file = "D:/aa-projetos/andreas0r0s_xyz/src/pages/works/work1.md";
				const url = "/works/work1";
				function rawContent() {
					return "\r\n- Lead investigations into organized crime, drug trafficking, and high-profile criminal activities.\r\n- Conducted extensive surveillance operations utilizing advanced equipment and techniques to gather critical intelligence.\r\n- Collaborated with federal agencies such as the FBI and DEA on joint task forces to dismantle criminal syndicates.\r\n- Played a pivotal role in numerous undercover operations, successfully infiltrating criminal organizations and gathering actionable evidence for prosecution.\r\n- Trained and mentored junior officers in surveillance tactics, undercover operations, and tactical maneuvers.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
