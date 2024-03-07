import _ from "lodash";
import { blockTypes } from "../const/blockTypes";

const normalizeHeaderAndFooter = (content) => {
  const firstHeader = _.filter(content, (block) => block.type === blockTypes.HEADER)?.[0]
  const firstFooter = _.filter(content, (block) => block.type === blockTypes.FOOTER)?.[0]
  const contentWithoutHeaderAndFooter = _.filter(content, (block) => block.type !== blockTypes.HEADER && block.type !== blockTypes.FOOTER) ?? []

  return [...([firstHeader] ?? []), ...contentWithoutHeaderAndFooter, ...([firstFooter] ?? [])]
}

export const normalizeContent = (content) => {
  return normalizeHeaderAndFooter(content.contentData)
}
