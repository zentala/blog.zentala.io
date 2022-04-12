import React from "react"
// TODO improve TS

type Props = {
  tags: string[],
}

const Tags: React.FC<Props>  = ({ tags }) => {
  type TagProps = { tag: string }
  const Tag: React.FC<TagProps> = ({ tag }) => <span className="tag" key={tag}>{tag}</span>

  type SeparateProps = { items: string[], render: (name: string) => React.FC<TagProps>, separator?: string }
  const Separate: React.FC<SeparateProps> = ({ items, render, separator = ', ' }) => {
    return items.map((item, index) => [index > 0 && separator, render(item)])
  }

  return (
    <Separate
      items={tags}
      render={name => <Tag tag={name} />}
    />
  )
};

export default Tags;
