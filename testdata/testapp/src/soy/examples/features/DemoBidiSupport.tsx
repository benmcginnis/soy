import * as React from 'react';
import { Trans } from 'react-i18next';
import { bidiDirAttr, bidiEndEdge, bidiSpanWrap, bidiUnicodeWrap } from '../../../soyfuncs';

export interface DemoBidiSupportProps {
  title: any;
  author: any;
  year: any;
  keywords: any;
}

/**
 * Demo BiDi support.
 * @param props DemoBidiSupportProps
 * @param props.title Book title.
 * @param props.author Author's name.
 * @param props.year Year published.
 * @param props.keywords List of keywords.
 */
export const DemoBidiSupport = (props: DemoBidiSupportProps) => {
  const { title, author, year, keywords } = props;
  return (
    <>
      {/* If $title has the opposite directionality relative to the overall locale, it needs to be */}
      {/* declared as such using the dir attribute on the element around it. Otherwise, it may be */}
      {/* garbled. For example, in an RTL page, an LTR value like "101 Dalmatians!" will be displayed */}
      {/* as "!Dalmatians 101". */}
      {/* */}
      {/* Setting the dir attribute on a block element like <div> has the side-effect of setting its */}
      {/* default alignment. In some cases, this is desirable, since text is generally more readable */}
      {/* when start-aligned. In such cases, we declare directionality using the bidiDirAttr() function, */}
      {/* which returns dir="ltr" for an LTR value in an RTL locale, dir="rtl" for an RTL value in an LTR */}
      {/* locale, and an empty string otherwise. */}
      {/* */}
      <div id="title1" style={{ fontVariant:"small-caps" }} dir={bidiDirAttr(title)}>
        {title}
      </div>

      {/* In other cases, changing alignment may do more harm than good by upsetting the layout of the */}
      {/* page, and we do not want to do it. Our $title seems to be one such case. To avoid setting the */}
      {/* dir attribute on the <div>, we declare $title's directionality using the |bidiSpanWrap print */}
      {/* directive, which wraps the value to be printed in a <span dir="ltr">, <span dir="rtl">, or */}
      {/* nothing at all when it has the same directionality as the locale. */}
      <div id="title2" style={{ fontVariant:"small-caps" }}>
        {bidiSpanWrap(title)}
      </div>

      {/* The |bidiSpanWrap directive is in fact the usual way to declare directionality. One of its */}
      {/* advantages is that it can be used when the possibly opposite-directionality value, like our */}
      {/* $author here, is not already wrapped in an element of its own, without adding to the size of */}
      {/* the output in the usual case of same directionality. */}
      {/* */}
      {/* Another even more important advantage is that it prevents an opposite-directionality value */}
      {/* from "sticking" to a number or another opposite-directionality string following it in-line. In */}
      {/* this case, for example, it makes sure we get 'by HEBREW NAME (2009)', not */}
      {/* 'by 2009) HEBREW NAME)'. */}
      <Trans i18nkey={"Indicates who wrote the book and when, e.g. 'by Rudyard Kipling (1892)'"}>
        by {bidiSpanWrap(author)} ({year})
      </Trans>

      <div id="choose_a_keyword">
        {/* Please note that messages, by definition being in the language of the overall locale, can */}
        {/* not be of the opposite directionality and do not need directionality declaration. */}
        <Trans i18nkey={"Ask user to pick best keyword"}>
          Your favorite keyword
        </Trans>
        :{' '}
        <select>
          {keywords.map((keyword :any, index: number) => {
            return (
              <React.Fragment key={index}>
                {/* Mark-up is not allowed under the option element, and setting its dir attribute does not */}
                {/* do what one would expect. The only way to prevent the garbling of opposite- */}
                {/* directionality options is to use |bidiUnicodeWrap, which wraps its input in Unicode BiDi */}
                {/* formatting characters that declare its directionality. So why not always use */}
                {/* |bidiUnicodeWrap instead of |bidiSpanWrap? Because the W3C strongly deprecates the use */}
                {/* of the formatting characters it uses except in places where mark-up cannot be used. */}
                <option value={keyword}>{bidiUnicodeWrap(keyword)}</option>
              </React.Fragment>
            );
          })}
        </select>
      </div>

      {/* Since most of the layout of an RTL page is supposed to be the mirror image of an LTR page, */}
      {/* most instances of 'left' and 'right' in the style should be replaced with {bidiStartEdge()} */}
      {/* and {bidiEndEdge()}, respectively. Here, we want the Help link at the "far" edge of the page, */}
      {/* i.e. on the right in LTR and on the left in RTL. */}
      <a href="#" style={{float: bidiEndEdge()}}>
        <Trans i18nkey={"Link to Help"}>
          Help
        </Trans>
      </a>
      <br/>

    </>
  )
}