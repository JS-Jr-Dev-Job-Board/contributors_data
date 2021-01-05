const router = require("express").Router();

const Contributors = require("./contributors-model");

router.get("/", (req, res) => {
  Contributors.getContributors()
    .then((contributors) => {
      res.status(200).json(contributors);
    })
    .catch((err) => res.send(err));
});

router.get("/:id", (req, res) => {
  Contributors.getContributorById(req.params.id)
    .then((contributors) => {
      res.status(200).json(contributors);
    })
    .catch((err) => res.send(err));
});

router.post("/", (req, res) => {
  Contributors.addContributor(req.body)
    .then((contributors) => {
      res.status(200).json(contributors);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const edit = req.body;
  Contributors.getContributorById(id)
    .then((contributor) => {
      if (contributor) {
        return Contributors.editContributorById(edit, id);
      } else {
        res
          .status(404)
          .json({ message: "Could not find contributor with given id" });
      }
    })
    .then((updatedContributor) => {
      res.json(updatedContributor);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Contributors.deleteContributor(id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json(deleted);
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete project" });
    });
});

module.exports = router;
