import React from 'react'
import { Modal } from "react-bootstrap"

const AdminModalEditarMesa = ({ mostrarModalEditar, setMostrarModalEditar }) => {
  return (
    <Modal show={mostrarModalEditar} onHide={() => {
      setMostrarModalEditar(false)
    }} size={"xl"} >
      <Modal.Header closeButton>
        <Modal.Title>Editar Mesa</Modal.Title>
      </Modal.Header>
      <Modal.Body>



      </Modal.Body>

    </Modal >
  )
}

export default AdminModalEditarMesa
