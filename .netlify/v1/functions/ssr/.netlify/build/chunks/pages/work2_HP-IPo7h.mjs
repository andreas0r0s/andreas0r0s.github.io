/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_UxmC59nB.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Led SWAT operations in high-risk situations, including hostage rescues, armed standoffs, and counter-terrorism missions.</li>\n<li>Developed and implemented tactical plans tailored to specific scenarios, ensuring the safety of hostages, civilians, and law enforcement personnel.</li>\n<li>Conducted specialized training for SWAT team members in firearms proficiency, close-quarters combat, tactical movement, and hostage negotiation.</li>\n<li>Coordinated with local, state, and federal agencies to support joint operations and enhance interagency cooperation.</li>\n<li>Provided expertise and assistance in the planning and execution of high-profile security details for visiting dignitaries, VIPs, and major events.</li>\n</ul>";

				const frontmatter = {"title":"Tactical Team Leader","date":"1985 - 1990","url":"http://atawajof.dz/vonilzor","location":"Los Angeles, California","org":"Los Angeles County Sheriff's Department – SWAT Division","tags":["SWAT","Surveillance","Undercover Operations","Evidence Gathering","Case Solving","Interviewing Skills"]};
				const file = "D:/aa-projetos/andreas0r0s_xyz/src/pages/works/work2.md";
				const url = "/works/work2";
				function rawContent() {
					return "\r\n- Led SWAT operations in high-risk situations, including hostage rescues, armed standoffs, and counter-terrorism missions.\r\n- Developed and implemented tactical plans tailored to specific scenarios, ensuring the safety of hostages, civilians, and law enforcement personnel.\r\n- Conducted specialized training for SWAT team members in firearms proficiency, close-quarters combat, tactical movement, and hostage negotiation.\r\n- Coordinated with local, state, and federal agencies to support joint operations and enhance interagency cooperation.\r\n- Provided expertise and assistance in the planning and execution of high-profile security details for visiting dignitaries, VIPs, and major events.\r\n";
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
