import styled from 'styled-components'
import colors from '../../styles/colors'

import * as enums from '../../utils/enums/Task'
import { Button } from '../../styles'

type TagProps = {
  priority?: enums.Priority
  status?: enums.Status
  param: 'priority' | 'status'
}

function returnBackgroundColor(props: TagProps): string {
  if (props.param === 'priority') {
    if (props.priority === enums.Priority.URGENT) return colors.purple
    if (props.priority === enums.Priority.IMPORTANT) return colors.red
    if (props.priority === enums.Priority.NORMAL) return colors.gray
  } else {
    if (props.status === enums.Status.DONE) return colors.green
    if (props.status === enums.Status.PENDING) return colors.yellow
  }

  return '#95afc0'
}

// function lineThroughTitle(props: TagProps) {
//   if (props.status === enums.Status.DONE) return 'line-through'
// }

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    cursor: pointer;

    input {
      margin-right: 8px;
    }
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`
// text-decoration: ${(props) => lineThroughTitle(props)};

export const Tag = styled.span<TagProps>`
  color: #fff;
  background-color: ${(props) => returnBackgroundColor(props)};
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  border-radius: 8px;
  margin-right: 16px;
`

export const Description = styled.textarea`
  color: #8b8b8b;
  background-color: transparent;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const RemoveButton = styled(Button)`
  background-color: ${colors.red};
`
