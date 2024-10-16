/**
 * Creates the Matrix of Levenshtein distance in a vector.
 *
 * @param {string} string1 - Given string.
 * @param {string} string2 - String to compare to.
 *
 * @returns {Array} Leveshtein distance matrix.
 */
function distance_matrix(string1, string2) 
{
  let row = string1.length + 1;
  let col = string2.length + 1;

  let distance_matrix = new Array(row * col);

  // Initialize extra row
  for (let i = 0; i < row; i++) {
    distance_matrix[i * row] = i;
  }

  // Initialize extra col
  for (let j = 0; j < col; j++) {
    distance_matrix[j] = j;
  }

  return distance_matrix;
}

/**
 * Calculates the Levenshtein distance.
 *
 * @param {string} string1 - Given string.
 * @param {string} string2 - String to compare to.
 *
 * @returns {int} Leveshtein distance.
 */
function levenshtein(string1, string2)
{
  if (string1 == string2) {
    return 0;
  }

  // Makes string1 always the bigger
  if (string2.length > string1.length) {
    let temp = string1;
    string1 = string2;
    string2 = temp;
  }

  let dist_mat = distance_matrix(string1, string2);

  let row = string1.length + 1;
  let col = string2.length + 1;

  for (let j = 1; j < col; j++)
  {
    for (let i = 1; i < row; i++)
    {
      let top_left = dist_mat[(i - 1) * row + (j - 1)];
      let top_right = dist_mat[i * row + (j - 1)];
      let bottom_left = dist_mat[(i - 1) * row + j];

      // Add 1 to the minimum value, if the letters are different
      let cost = string1[j - 1] == string2[i - 1] ? 0 : 1;

      let change = Math.min(top_left, top_right, bottom_left) + cost;

      dist_mat[i * row + j] = change;
    }
  }

  return dist_mat[dist_mat.length - 1];
}

/**
 * Calculates the similarity between two strings
 * using the Leveshtein distance.
 * 
 * @param {string} string1 - Given string.
 * @param {string} string2 - String to compare to.
 * @param {int} precision - Precision of the float result.
 *
 * @returns {number} similarity.
 */
function strings_similarity(string1, string2, precision=1)
{
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  let distance = levenshtein(string1, string2);
  let max_length = Math.max(string1.length, string2.length);

  return (1 - distance / max_length).toFixed(precision);
}