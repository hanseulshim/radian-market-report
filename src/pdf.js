import JSPDF from 'jspdf'

export const doc = new JSPDF()

doc.text('Hello Scott!', 10, 10)
doc.text('Hello John!', 10, 20)
