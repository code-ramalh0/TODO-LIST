import { Button, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Form() {
    const [text, setText] = useState(null);

  return (
    <Paper style={{ padding: "1em"}}>
        <div style={{ display: "flex", justifyContent: "center"}}>
        <TextField id="outlined-basic" label="Tarefa" variant="outlined" onChange={(e) => setText(e.target.value)} fullWidth/>
        <button variant="text" onClick={() => console.log(Text)}>
            ADD
        </button>
        </div>
    </Paper>
  )
}
