export function AddItem(item) {
  fs.writeFileSync(
    "List.json",
    JSON.stringify({
      vc: "maniaco",
    })
  );
}
